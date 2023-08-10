import mongoose from 'mongoose';
import { LinkPage, User } from '@/types/User';
import UserSchema from './models/UserSchema';
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
});

const uri = String(process.env.DB_URL);
const client = mongoose.connect(uri);

export const db = {
  getUser: async (username: string): Promise<User | null> => {
    const user = await UserSchema.findOne<User>({ username });
    return user;
  },
  addUser: async (user: User) => {
    const newUser = new UserSchema(user);
    await newUser.save();
  },
  deleteUser: async (username: string) => {
    const { deletedCount } = await UserSchema.deleteOne({ username });
    return deletedCount;
  },
  addLinkPage: async (username: string, linkpage: LinkPage) => {
    const updatedDocument = await UserSchema.findOneAndUpdate(
      { username },
      { $push: { linkPages: linkpage } },
      { new: true },
    );
    return updatedDocument;
  },
  getAllLinkPages: async (username: string) => {
    const user = await db.getUser(username);
    if (!user) throw new Error("User doesn't exist");
    if (!user.linkPages) return [];
    return user.linkPages;
  },
  getLinkPage: async (pageid: string) => {
    try {
      const user = await UserSchema.findOne({ 'linkPages.pageid': pageid });
      if (!user) throw new Error('User page not found');
      const linkPage: LinkPage = user.linkPages.find(
        (page: LinkPage) => page.pageid === pageid,
      );
      if (!linkPage) throw new Error('Link page not found');
      return linkPage;
    } catch (err) {
      throw err;
    }
  },
  replaceLinkPage: async (
    username: string,
    linkpage: LinkPage,
    linkpageid: string,
  ) => {
    const updatedDocument = await UserSchema.findOneAndUpdate(
      { username, 'linkPages.pageid': linkpageid },
      { $set: { 'linkPages.$': linkpage } },
      { new: true },
    );
    return updatedDocument;
  },
  deleteLinkPage: async (username: string, pageid: string) => {
    const updatedDocument = await UserSchema.findOneAndUpdate(
      { username },
      { $pull: { linkPages: { pageid } } },
      { new: true },
    );
    return updatedDocument;
  },
  updateUserProfile: async (username: string, email: string) => {
    return UserSchema.findOneAndUpdate(
      { username },
      { $set: { email } },
      { new: true },
    );
  },
};

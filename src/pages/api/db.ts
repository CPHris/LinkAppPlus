import mongoose from "mongoose";
import { LinkPage, User } from "@/types/User";
import UserSchema from "./UserSchema";

const uri = "mongodb://127.0.0.1:27017/LinkApp";
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
      { new: true });
    return updatedDocument;
  }
};
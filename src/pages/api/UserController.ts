import { User } from "@/types/User";
import { db } from "./db";

export const UserController = {
  getUser: async (username: string): Promise<User | null> => {
    const user = await db.getUser(username);
    return user;
  },
  addUser: async (user: User) => {
    await db.addUser(user);
  }
};
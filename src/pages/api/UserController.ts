import { User } from "@/types/User";
import { db } from "./db";

export const UserController = {
  getUser: async (username: string): Promise<User | null> => {
    const user = await db.getUser(username);
    return user;
  },
  addUser: async (user: User) => {
    const userExists = await db.getUser(user.username);
    if (userExists) {
      throw new Error("User already exists");
    }
    await db.addUser(user);
  }
};
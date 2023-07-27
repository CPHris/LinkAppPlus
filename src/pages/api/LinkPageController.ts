import { db } from "./db";
import { LinkPage, User } from "@/types/User";

export const LinkPageController = {
  getAllLinkPages: async (username: string) => {
  },
  getLinkPage: async (pageid: string) => {

  },
  addLinkPage: async (username: string, linkpage: LinkPage) => {
    const updatedDocument: User = await db.addLinkPage(username, linkpage);
    return updatedDocument;
  },

};
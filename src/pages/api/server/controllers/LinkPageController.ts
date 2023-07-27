import { db } from "../db";
import { LinkPage, User } from "@/types/User";

export const LinkPageController = {
  getAllLinkPages: async (username: string) => {
    const linkPages = await db.getAllLinkPages(username);
    return linkPages;
  },
  getLinkPage: async (pageid: string) => {

  },
  addLinkPage: async (username: string, linkpage: LinkPage) => {
    const updatedDocument: User = await db.addLinkPage(username, linkpage);
    return updatedDocument;
  },

};
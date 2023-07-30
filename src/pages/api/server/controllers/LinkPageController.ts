import { db } from "../db";
import { LinkPage, User } from "@/types/User";

export const LinkPageController = {
  getAllLinkPages: async (username: string) => {
    const linkPages = await db.getAllLinkPages(username);
    return linkPages;
  },
  getLinkPage: async (pageid: string) => {
    const linkPage = db.getLinkPage(pageid);
    return linkPage;
  },
  addLinkPage: async (username: string, linkpage: LinkPage) => {
    const updatedDocument: User = await db.addLinkPage(username, linkpage);
    return updatedDocument;
  },
  replaceLinkPage: async (username: string, linkPage: LinkPage, linkpageid: string) => {
    const updatedDocument: User = await db.replaceLinkPage(username, linkPage, linkpageid);
    return updatedDocument;
  },
  deleteLinkPage: async (username: string, pageid: string) => {
    const updatedDocument: User = await db.deleteLinkPage(username, pageid);
    return updatedDocument;
  }
};
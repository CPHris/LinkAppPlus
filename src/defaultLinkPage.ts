import { LinkPage } from "./types/User";

export const createDefaultLinkPage = (pageid: string): LinkPage => {
  return {
    pageid,
    name: 'New Page',
    description: 'This is a new page',
    links: [],
    backgroundImg: '#22D3EE',
    textColor: "#fff",
    avatarImg: ''
  };
};
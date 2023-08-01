import { LinkPage } from "./types/User";

export const createDefaultLinkPage = (): LinkPage => {
  return {
    pageid: Date.now().toString(),
    name: 'New Page',
    description: 'This is a new page',
    links: [],
    backgroundImg: '#22D3EE',
    textColor: "#fff",
    avatarImg: ''
  };
};
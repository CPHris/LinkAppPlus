export type User = {
  _id?: string,
  username: string,
  email: string,
  linkPages?: LinkPage[];
};

export type LinkPage = {
  _id?: string,
  pageid: string,
  name: string,
  avatarImg?: string,
  description: string,
  backgroundImg?: string;
  links?: SocialMediaLink[];
};

export type SocialMediaLink = {
  img: string,
  title: string,
  subtitle: string,
  link: string;
};
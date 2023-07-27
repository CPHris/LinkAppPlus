import { SocialMediaLink } from '@/types/User';
import * as React from 'react';
import LinkListItem from './LinkListItem';

export interface ILinkListProps {
  links: SocialMediaLink[];
}

export default function LinkList (props: ILinkListProps) {
  return (
    <div>
      {props.links.map(link => <LinkListItem link={link} key={link.title} />)}
    </div>
  );
}

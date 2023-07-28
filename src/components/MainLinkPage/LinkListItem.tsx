import { SocialMediaLink } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';

export interface ILinkListItemProps {
  link: SocialMediaLink;
}

export default function LinkListItem (props: ILinkListItemProps) {
  const { title, subtitle, img, url: link } = props.link;
  return (
    <Link href={link}>
      <div>
        <div>
          <img src={img} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

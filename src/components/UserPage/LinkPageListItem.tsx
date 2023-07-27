import { LinkPage } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';


export interface ILinkPagesListItemProps {
  linkpage: LinkPage;
  userRoute: string;
}

export default function LinkPagesListItem (props: ILinkPagesListItemProps) {
  const { name, pageid } = props.linkpage;
  return (
    <div>
      <span>{name}</span>
      <Link href={`${props.userRoute}/edit/${pageid}`}>Edit Page</Link>
    </div>
  );
}

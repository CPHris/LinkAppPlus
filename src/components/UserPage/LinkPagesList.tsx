import { LinkPage } from '@/types/User';
import * as React from 'react';
import LinkPagesListItem from './LinkPageListItem';

export interface ILinkPagesListProps {
  linkpages?: LinkPage[];
  userRoute: string;
}

export default function LinkPagesList (props: ILinkPagesListProps) {
  const { linkpages, userRoute } = props;
  return (
    <div className='border-t mb-3'>
      {linkpages && linkpages.map(linkpage => <LinkPagesListItem linkpage={linkpage} userRoute={userRoute} />)}
    </div>
  );
}

import { SocialMediaLink } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';

export interface ILinkListItemProps {
  link: SocialMediaLink;
}

export default function LinkListItem (props: ILinkListItemProps) {
  const { title, subtitle, img, url } = props.link;
  return (
    <Link className='block p-5 mb-5 bg-white rounded-3xl'
      href={url}>
      <div className='flex flex-row items-center'>
        <div>
          <img src={img} className='w-20 sm:w-10 rounded-md flex mr-5' />
        </div>
        <div className='mr-3'>
          <span className='block font-bold sm:text-sm'>{title}</span>
          <span className='block sm:text-sm'>{subtitle}</span>
        </div>
      </div>
    </Link>
  );
}

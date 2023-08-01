import { SocialMediaLink } from '@/types/User';
import Image from 'next/image';
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
          <img src={img} className='w-10 rounded-md flex mr-5' alt='Social media icon' />
        </div>
        <div className='mr-3'>
          <span className='block font-bold text-sm'>{title}</span>
          <span className='block text-sm'>{subtitle}</span>
        </div>
      </div>
    </Link>
  );
}

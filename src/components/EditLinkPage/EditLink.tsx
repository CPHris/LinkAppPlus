import { SocialMediaLink } from '@/types/User';
import * as React from 'react';

export interface IEditLinkProps {
  link: SocialMediaLink;
}

export default function EditLink (props: IEditLinkProps) {
  const { link } = props;
  return (
    <div className='w-96 p-5 mb-5 bg-white rounded-lg flex flex-row items-center'>
      <img src={link.img} className='w-20 rounded-md flex mr-5' />
      <div className='mr-3'>
        <input type='text' value={link.title} className='block mx-auto mt-0 mb-3 px-3 bg-gray-200 text-center rounded-md' />
        <input type='text' value={link.subtitle} className='block mx-auto my-0 px-3 bg-gray-200 text-center rounded-md' />
      </div>
      <button className='p-2 bg-red-400 rounded-lg'><i className="fa-solid fa-trash text-white"></i></button>
    </div>
  );
}

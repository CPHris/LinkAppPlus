import { SocialMediaLink } from '@/types/User';
import * as React from 'react';
import { useState } from 'react';

export interface IEditLinkProps {
  link: SocialMediaLink,
  index: number,
  onChange: (link: SocialMediaLink) => void;
}

export default function EditLink (props: IEditLinkProps) {
  const { link } = props;
  const [title, setTitle] = useState(link.title);
  const [subtitle, setSubtitle] = useState(link.subtitle);
  const [img, setImg] = useState(link.img);

  // TODO every time there is a change, call the onChange an pass the new

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  return (
    <div className='w-96 p-5 mb-5 bg-white rounded-lg flex flex-row items-center'>
      <img src={link.img} className='w-20 rounded-md flex mr-5' />
      <div className='mr-3'>
        <input type='text' onChange={onTitleChange} value={title} className='block mx-auto mt-0 mb-3 px-3 bg-gray-200 text-center rounded-md' />
        <input type='text' onChange={onSubtitleChange} value={subtitle} className='block mx-auto my-0 px-3 bg-gray-200 text-center rounded-md' />
      </div>
      <button className='p-2 bg-red-400 rounded-lg'><i className="fa-solid fa-trash text-white"></i></button>
    </div>
  );
}

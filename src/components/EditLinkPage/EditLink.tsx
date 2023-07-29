import { SocialMediaLink } from '@/types/User';
import * as React from 'react';
import { useState } from 'react';

export interface IEditLinkProps {
  link: SocialMediaLink,
  index: number,
  onChange: (link: SocialMediaLink, index: number) => void;
}

export default function EditLink (props: IEditLinkProps) {
  const [isEditingModeEnabled, setEditingMode] = useState(false);
  const { link } = props;
  const [title, setTitle] = useState(link.title);
  const [subtitle, setSubtitle] = useState(link.subtitle);
  const [img, setImg] = useState(link.img);

  const toggleEditingMode = () => {
    setEditingMode(prevState => !prevState);
  };

  // TODO every time there is a change, call the onChange an pass the new
  const wrapLink = () => {
    const editedLink: SocialMediaLink = {
      img,
      title,
      subtitle,
      url: link.url
    };
    props.onChange(editedLink, props.index);
    toggleEditingMode();
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  return (
    <div className='w-96 p-5 mb-5 bg-white rounded-lg flex flex-row items-center'>
      <div className='h-full mr-2 flex flex-col'>
        {isEditingModeEnabled
          ? <button type='button' className='px-1 bg-green-400 rounded mb-7'><i className="fa-regular fa-circle-check fa-xs text-white" onClick={wrapLink}></i></button>
          : <button type='button' className='px-1 border-solid border border-cyan-500 rounded mb-7'><i className="fa-solid fa-edit fa-xs text-cyan-500" onClick={toggleEditingMode}></i></button>
        }
        <button type='button' className='px-1 bg-red-400 rounded'><i className="fa-solid fa-trash fa-xs text-white"></i></button>
      </div>
      <img src={link.img} className='w-20 rounded-md flex mr-5' />
      {isEditingModeEnabled
        ? (<div className='mr-3'>
          <input type='text' onChange={onTitleChange} value={title} className='block mx-auto mt-0 mb-3 px-3 bg-gray-200 text-center rounded-md' />
          <input type='text' onChange={onSubtitleChange} value={subtitle} className='block mx-auto my-0 px-3 bg-gray-200 text-center rounded-md' />
        </div>)
        : (<div className='mr-3'>
          <span className='block font-bold'>{title}</span>
          <span className='block '>{subtitle}</span>
        </div>)}

    </div>
  );
}

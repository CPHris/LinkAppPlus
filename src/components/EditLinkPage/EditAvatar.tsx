import * as React from 'react';
import { useState } from 'react';

export interface IEditAvatarProps {
  img?: string,
  letters: string,
  onChange: (img: string) => void;
}

export default function EditAvatar (props: IEditAvatarProps) {
  const [img, setImg] = useState<string | undefined>(props.img);
  const [imgSrc, setImgSrc] = useState<string | undefined>(props.img);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value);
  };

  const onClickHandler = () => {
    if (img) {
      setImgSrc(img);
      props.onChange(img);
    }
  };
  return (
    <div className='w-full p-8 mb-5 bg-white rounded-lg'>
      <h2 className='block text-center mb-2 font-semibold'>Avatar</h2>
      {imgSrc && imgSrc !== '' ? <img src={imgSrc} className='mt-0 mb-5 mx-auto w-36 rounded-full' /> :
        <div className='px-10 py-8 w-fit rounded-full bg-cyan-500 text-white font-bold text-3xl mx-auto mb-5'>{props.letters.toUpperCase()}</div>
      }
      <div className='w-fit mx-auto my-0'>
        <input onChange={onChangeHandler} type='text' value={img} name='avatarImg' className=' px-3 mr-3 bg-gray-200 rounded-md' />
        <button type='button' className='px-2 bg-cyan-400 rounded' onClick={onClickHandler}><i className="fa-solid fa-image fa-xs text-white"></i></button>
      </div>
    </div>
  );
}

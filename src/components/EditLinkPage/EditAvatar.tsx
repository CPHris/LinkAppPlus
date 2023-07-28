import * as React from 'react';
import { useState } from 'react';

export interface IEditAvatarProps {
  img?: string,
  letters: string,
  onChange: (value: string | undefined) => void;
}

export default function EditAvatar (props: IEditAvatarProps) {
  const [img, setImg] = useState<string | undefined>(props.img);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value);
    props.onChange(img);
  };
  return (
    <div className='w-full p-8 mb-5 bg-white rounded-lg'>
      <h2 className='block text-center mb-2 font-semibold'>Avatar</h2>
      {props.img || props.img !== '' ? <img src={props.img} className='mt-0 mb-5 mx-auto w-36 rounded-full' /> :
        <div>{props.letters.toUpperCase()}</div>
      }
      <input onChange={onChangeHandler} type='text' value={img} name='avatarImg' className='block mx-auto my-0 px-3 bg-gray-200 rounded-md' />
    </div>
  );
}

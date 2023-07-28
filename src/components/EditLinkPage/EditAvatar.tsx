import * as React from 'react';

export interface IEditAvatarProps {
  img?: string;
  letters: string;
}

export default function EditAvatar (props: IEditAvatarProps) {
  return (
    <div className='w-full p-8 mb-5 bg-white'>
      {props.img ? <img src={props.img} className='mt-0 mb-5 mx-auto w-36 rounded-full' /> :
        <div>{props.letters.toUpperCase()}</div>
      }
      <input type='text' value={props.img} name='avatarImg' className='block mx-auto my-0 px-3 bg-gray-200' />
    </div>
  );
}

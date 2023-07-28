import * as React from 'react';

export interface IEditAvatarProps {
  img?: string;
  letters: string;
}

export default function EditAvatar (props: IEditAvatarProps) {
  return (
    <div>
      {props.img ? <img src={props.img} /> :
        <div>{props.letters.toUpperCase()}</div>
      }
      <input type='text' value={props.img} name='avatarImg' />
    </div>
  );
}

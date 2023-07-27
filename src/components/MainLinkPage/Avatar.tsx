import * as React from 'react';

export interface IAvatarProps {
  img?: string,
  name: string;
}

export default function Avatar (props: IAvatarProps) {
  const { img, name } = props;
  return (
    <div>
      {img
        ? <img src={img} />
        : <div>{name[0].toUpperCase()}</div>
      }
    </div>
  );
}

import Image from 'next/image';
import * as React from 'react';

export interface IAvatarProps {
  img?: string;
  name: string;
}

export default function Avatar(props: IAvatarProps) {
  const { img, name } = props;
  return (
    <>
      {img && img !== '' ? (
        <Image
          src={img}
          className="mt-0 mb-5 mx-auto w-36 rounded-full"
          alt="avatar"
          height={800}
          width={800}
        />
      ) : (
        <div className="px-10 py-8 w-fit rounded-full bg-cyan-500 text-white font-bold text-3xl mx-auto mb-5">
          {name && name[0] ? name[0].toUpperCase() : 0}
        </div>
      )}
    </>
  );
}

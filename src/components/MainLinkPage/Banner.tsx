import Link from 'next/link';
import * as React from 'react';

export interface IBannerProps {
  dismissBanner: () => void;
}

export default function Banner (props: IBannerProps) {
  return (
    <div className='bg-slate-700 p-2 w-full fixed top-0'>
      <div className='relative'>
        <Link href='/' className='block text-white py-2 px-4 bg-cyan-500 w-fit rounded-2xl mx-auto'>
          Get your own link page
        </Link>
        <button className='absolute top-0'
          type='button'
          onClick={props.dismissBanner}>
          <i className="fa-regular fa-circle-xmark text-gray-400"></i>
        </button>
      </div>
    </div>
  );
}

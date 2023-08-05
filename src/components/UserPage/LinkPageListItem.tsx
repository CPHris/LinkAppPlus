import { userActions } from '@/store/user-slice';
import { LinkPage } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';


export interface ILinkPagesListItemProps {
  linkpage: LinkPage;
  userRoute: string;
  deleteLinkPage: (pageid: string) => void;
}

export default function LinkPagesListItem (props: ILinkPagesListItemProps) {
  const { name, pageid } = props.linkpage;

  const deleteLinkPage = () => {
    props.deleteLinkPage(pageid);
  };
  return (
    <div className='flex felx-row basis-1/3 justify-between items-center border-b p-5'>
      <span className='text-md font-semibold w-full'>{name}</span>
      <div className='w-full'>
        <span className='block text-sm font-semibold text-center'>Total visits</span>
        <span className='block text-sm text-center'>1790</span>
      </div>
      <div className='w-full text-right'>
        <Link id="edit-btn" href={`${props.userRoute}/edit/${pageid}`} className='px-1 border-solid border border-cyan-500 rounded mb-7 mr-3'><i className="fa-solid fa-edit fa-xs text-cyan-500" ></i></Link>
        {/* <Link href={`${props.userRoute}/analytics/${pageid}`} className='px-1 border-solid border border-cyan-500 rounded mb-7'><i className="fa-sharp fa-regular fa-chart-line"></i></Link> */}
        <button id="page-del-btn" type='button' className='px-1 bg-red-400 rounded' onClick={deleteLinkPage}><i className="fa-solid fa-trash fa-xs text-white"></i></button>
      </div>
    </div>
  );
}

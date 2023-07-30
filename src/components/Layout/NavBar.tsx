import { User } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

export interface INavBarProps {
  username: string,
  email: string;
}

export default function NavBar (props: INavBarProps) {
  const [isDropDownMenuVisible, setIsDropDownMenuVisible] = useState(false);
  const { username, email } = props;
  const toggleDropDownMenu = () => {
    setIsDropDownMenuVisible(prevState => !prevState);
  };
  return (
    <div className='flex justify-between items-center px-4 py-2 mb-5 border-b border-gray-400 relative'>
      <div className='font-bold text-lg'>LinkApp</div>
      <button className='block w-fit px-4 py-2 w-fit rounded-full bg-cyan-500 text-white font-bold text-md ' onClick={toggleDropDownMenu}>{username[0].toUpperCase()}</button>
      {isDropDownMenuVisible && <DropDownMenu username={username} email={email} onclick={toggleDropDownMenu} />}
    </div>
  );
}
interface IDropDownMenuProps {
  username: string,
  email: string;
  onclick: () => void;
}
function DropDownMenu (props: IDropDownMenuProps) {
  const { username, email, onclick } = props;
  return (
    <div className='p-4 border border-gray-400 rounded-lg absolute top-14 right-0 bg-white'>
      <button type='button' onClick={onclick}>
        <i className="fa-regular fa-circle-xmark text-gray-400"></i>
      </button>
      <div className='flex flex-col items-center px-4 mb-5'>
        {/* <button className='block w-fit px-4 py-2 w-fit rounded-full bg-cyan-500 text-white font-bold text-md mb-2'>{username[0].toUpperCase()}</button> */}
        <div className='font-semibold text-md'>{username}</div>
        <div className='italic text-xs'>{email}</div>
      </div>
      <div>
        <Link className='block border-b border-gray-400 p-2'
          href={`/user/${username}/profile`}
          onClick={onclick}><i className="fa-solid fa-gear mr-2"></i>Settings </Link>
        <Link className='block text-red-400 p-2'
          href='/login'><i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>Logout</Link>
      </div>
    </div>
  );
}

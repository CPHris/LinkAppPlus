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
    <div className='flex justify-between items-center px-4 py-2 mb-5 border-b border-gray-400'>
      <div className='font-bold text-lg'>LinkApp</div>
      {/* <div onClick={toggleDropDownMenu}>{username[0].toUpperCase()}</div> */}
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
    <div>
      <div>
        <div>{username}</div>
        <div>{email}</div>
      </div>
      <div>
        <Link href={`/user/${username}/profile`} onClick={onclick}>Settings</Link>
        <Link href='/login'>Logout</Link>
      </div>
    </div>
  );
}

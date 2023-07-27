import Link from 'next/link';
import * as React from 'react';

export interface IUserPageProps {
}

export default function UserPage (props: IUserPageProps) {
  return (
    <>
      <div>
        <h1>
          Hi, this is the User Page
        </h1>
      </div>
      <Link href='/user/asdfkjh/profile'>Go to profile</Link>
    </>
  );
}
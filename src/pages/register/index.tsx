import Link from 'next/link';
import * as React from 'react';

export interface IRegisterPageProps {
}

export default function RegisterPage (props: IRegisterPageProps) {
  return (
    <>
      <div>
        <h1>I'm the register page.</h1>
      </div>
      <Link href='/login'>I already have an account</Link>
      <br></br>
      <Link href='/user/patata'>Create user and log in</Link>
    </>
  );
}

import Link from 'next/link';
import * as React from 'react';

export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  return (
    <>
      <div>
        <h1>I'm the Login page.</h1>
      </div>
      <Link href='/register'>I don't have an account</Link>
      <br></br>
      <Link href='/user/patata'>Take me to my user page</Link>
    </>
  );
}
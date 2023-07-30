import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export interface ILayoutProps {
  username: string,
  email: string,
  children?: React.ReactNode;
}

export default function Layout (props: ILayoutProps) {
  const { username, email, children } = props;

  return (
    <div className='flex flex-col h-screen'>
      <NavBar username={username} email={email} />
      {children}
      <Footer />
    </div>
  );
}

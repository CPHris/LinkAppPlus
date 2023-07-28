import { User } from '@/types/User';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout (props: ILayoutProps) {
  const [user, setUser] = useState('I');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/api/user?username=${username}`);
      const payload = await response.json();
      setUser(payload.user.username);
      setEmail(payload.user.email);
    })();
  }, []);

  return (
    <div>
      <NavBar username={user} email={email} />
      {props.children}
      <Footer />
    </div>
  );
}

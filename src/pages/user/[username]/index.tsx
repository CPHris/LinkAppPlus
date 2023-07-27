import LinkPagesList from '@/components/UserPage/LinkPagesList';
import { User } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface IUserPageProps {
}

const UserPage: NextPage<{ user: User; }> = ({ user }) => {
  const userRoute = `/user/${user.username}`;
  return (
    <>
      <div>
        <h1>
          My Link Pages
        </h1>
        <LinkPagesList linkpages={user.linkPages} userRoute={userRoute} />
      </div>
      <Link href={`${userRoute}/profile`}>Go to profile</Link>
    </>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch data from API
  let user = {};
  if (context.params) {
    const { username } = context.params;
    const response = await fetch(`http://localhost:3000/api/user?username=${username}`);
    const payload = await response.json();
    user = payload.user;
  }

  return {
    props: {
      user
    }
  };
};
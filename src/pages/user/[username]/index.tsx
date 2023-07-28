import LinkPagesList from '@/components/UserPage/LinkPagesList';
import { User } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { userActions } from '@/store/user-slice';

const UserPage: NextPage<{ user: User; }> = ({ user }) => {
  const dispatch = useDispatch();
  const userRoute = `/user/${user.username}`;
  useEffect(() => {
    dispatch(userActions.login(user));
  }, []);

  return (
    <>
      <Layout username={user.username} email={user.email}>
        <h1>
          My Link Pages
        </h1>
        <LinkPagesList linkpages={user.linkPages} userRoute={userRoute} />
        <Link href={`${userRoute}/profile`}>Go to profile</Link>
      </Layout>
    </>
  );
};
export default UserPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
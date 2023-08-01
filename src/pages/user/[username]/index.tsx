import LinkPagesList from '@/components/UserPage/LinkPagesList';
import { User } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { userActions } from '@/store/user-slice';
import { useRouter } from 'next/router';
import { RootState } from '@/store';
import { toast } from 'react-toastify';
import { createDefaultLinkPage } from '@/defaultLinkPage';
import { http } from '@/apiService';

const UserPage: NextPage<{ user: User; }> = ({ user }) => {
  const dispatch = useDispatch();
  const userRoute = `/user/${user.username}`;
  const router = useRouter();

  useEffect(() => {
    dispatch(userActions.login(user));
  }, [dispatch, user]);

  const stateUser = useSelector((state: RootState) => state.user);

  const addNewPage = async () => {
    const page = createDefaultLinkPage();
    const response = await http.addNewPage({ username: user.username, linkpage: page });
    if (response && response.status === 201) {
      dispatch(userActions.addNewLinkPage(page));
      return router.push(`${userRoute}/edit/newPage`);
    }
    toast.error('Something went wrong');
  };

  const deleteLinkPage = async (pageid: string) => {
    const response = await http.deletePage({ username: stateUser.username, pageid });
    if (response && response.status === 201) {
      dispatch(userActions.deleteLinkPage(pageid));
      return toast.success('Link page deleted succesfully');
    }
    toast.error('Something went wrong');
  };

  return (
    <>
      <Layout username={stateUser.username} email={stateUser.email}>
        <main className='max-w-4xl mx-auto mb-auto w-full py-10'>
          <h1 className='font-bold text-xl text-center mb-5'>
            My Link Pages
          </h1>
          <LinkPagesList linkpages={stateUser.linkPages} userRoute={userRoute} deleteLinkPage={deleteLinkPage} />
          <button className="mx-auto block w-fit py-1 px-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-200"
            type='button'
            onClick={addNewPage}
          >Add New Page</button>
          {/* <Link href={`${userRoute}/profile`}>Go to profile</Link> */}
        </main>
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
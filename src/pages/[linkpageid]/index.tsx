import Avatar from '@/components/MainLinkPage/Avatar';
import Banner from '@/components/MainLinkPage/Banner';
import DescriptionBox from '@/components/MainLinkPage/DescriptionBox';
import LinkList from '@/components/MainLinkPage/LinkList';
import { LinkPage } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userActions } from '@/store/user-slice';

export interface IMainLinkPageProps {}

const MainLinkPage: NextPage<{ linkpage: LinkPage }> = ({ linkpage }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const userData = useSelector(userActions.selectUsername);
  const userMain = '/user/' + userData?.payload?.user?.username;
  return (
    <>
      <main
        className="h-screen"
        style={{ backgroundColor: linkpage.backgroundImg }}
      >
        <div className="max-w-md mx-auto pt-20 p-5">
          <Link class="absolute left-12 top-14 h-16 w-16" href={userMain}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </Link>
          <div className="mb-10">
            <Avatar name={linkpage.name} img={linkpage.avatarImg} />
            <h1
              className="font-bold text-xl text-center"
              style={{ color: linkpage.textColor }}
            >
              {linkpage.name}
            </h1>
            <DescriptionBox
              description={linkpage.description}
              textColor={linkpage.textColor}
            />
          </div>
          {linkpage.links && <LinkList links={linkpage.links} />}
        </div>
        {isBannerVisible && (
          <Banner
            dismissBanner={() => {
              setIsBannerVisible(false);
            }}
          />
        )}
      </main>
    </>
  );
};

export default MainLinkPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let linkpage = {};
  if (context.params) {
    const { linkpageid } = context.params;
    const response = await fetch(`http://localhost:3000/api/${linkpageid}`);
    const payload = await response.json();
    linkpage = payload.linkpage;
  }

  return {
    props: {
      linkpage,
    },
  };
};

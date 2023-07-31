import Avatar from '@/components/MainLinkPage/Avatar';
import Banner from '@/components/MainLinkPage/Banner';
import DescriptionBox from '@/components/MainLinkPage/DescriptionBox';
import LinkList from '@/components/MainLinkPage/LinkList';
import { LinkPage } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { useState } from 'react';

export interface IMainLinkPageProps {
}

const MainLinkPage: NextPage<{ linkpage: LinkPage; }> = ({ linkpage }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  return (
    <>
      <main className='h-screen' style={{ 'backgroundColor': linkpage.backgroundImg }}>
        <div className='max-w-md mx-auto pt-20 p-5'>
          <div className='mb-10'>
            <Avatar name={linkpage.name} img={linkpage.avatarImg} />
            <h1 className='font-bold text-xl text-center' style={{ 'color': linkpage.textColor }}>{linkpage.name}</h1>
            <DescriptionBox description={linkpage.description} textColor={linkpage.textColor} />
          </div>
          {linkpage.links && <LinkList links={linkpage.links} />}
        </div>
        {isBannerVisible && <Banner dismissBanner={() => { setIsBannerVisible(false); }} />}
      </main>
    </>
  );
};

export default MainLinkPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch data from API
  let linkpage = {};
  console.log('ola');
  if (context.params) {
    const { linkpageid } = context.params;
    const response = await fetch(`http://localhost:3000/api/${linkpageid}`);
    const payload = await response.json();
    linkpage = payload.linkpage;
  }

  return {
    props: {
      linkpage
    }
  };
};
import Avatar from '@/components/MainLinkPage/Avatar';
import DescriptionBox from '@/components/MainLinkPage/DescriptionBox';
import LinkList from '@/components/MainLinkPage/LinkList';
import { LinkPage } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';

export interface IMainLinkPageProps {
}

const MainLinkPage: NextPage<{ linkpage: LinkPage; }> = ({ linkpage }) => {
  console.log("🚀 ~ file: index.tsx:15 ~ linkpage:", linkpage);
  return (
    <>
      <div>
        <Avatar name={linkpage.name} img={linkpage.avatarImg} />
        <h1>{linkpage.name}</h1>
        <DescriptionBox description={linkpage.description} />
        {linkpage.links && <LinkList links={linkpage.links} />}

      </div>
    </>
  );
};

export default MainLinkPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch data from API
  let linkpage = {};
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
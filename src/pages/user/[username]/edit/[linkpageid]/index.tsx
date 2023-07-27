import { LinkPage } from '@/types/User';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';

export interface IEditLinkPageProps {
}

const EditLinkPage: NextPage<{ linkpage: LinkPage; }> = ({ linkpage }) => {
  console.log("🚀 ~ file: index.tsx:15 ~ linkpage:", linkpage);
  return (
    <div>
      <h1>I'm the Edit Link Page</h1>
    </div>
  );
};

export default EditLinkPage;

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

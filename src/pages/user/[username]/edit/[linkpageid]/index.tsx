import { RootState } from '@/store';
import { LinkPage } from '@/types/User';
import * as React from 'react';
import { useSelector } from 'react-redux';

export interface IEditLinkPageProps {
}

const EditLinkPage = () => {
  const linkPages = useSelector((state: RootState) => state.user.linkPages);
  const linkPage = getLinkPage('page1', linkPages);
  return (
    <div>
      <h1>I'm the Edit Link Page</h1>
      <div>{linkPage.name}</div>
    </div>
  );
};

export default EditLinkPage;

function getLinkPage (pageid: string, state: LinkPage[]) {
  const linkPage = state.filter(linkpage => linkpage.pageid === pageid);
  return linkPage[0];
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   //fetch data from API
//   let linkpage = {};
//   if (context.params) {
//     const { linkpageid } = context.params;
//     const response = await fetch(`http://localhost:3000/api/${linkpageid}`);
//     const payload = await response.json();
//     linkpage = payload.linkpage;
//   }

//   return {
//     props: {
//       linkpage
//     }
//   };
// };

import EditAvatar from '@/components/EditLinkPage/EditAvatar';
import Layout from '@/components/Layout';
import { RootState } from '@/store';
import { LinkPage } from '@/types/User';
import * as React from 'react';
import { useSelector } from 'react-redux';

export interface IEditLinkPageProps {
}

export default function EditLinkPage () {
  const user = useSelector((state: RootState) => state.user);
  const linkPage = getLinkPage('page1', user.linkPages);
  return (
    <Layout username={user.username} email={user.email}>
      <div>
        <form>
          <EditAvatar img={linkPage.avatarImg} letters={user.username[0]} />
          <div>
            <input type='text' value={linkPage.name} />
          </div>
          <div>
            <textarea value={linkPage.description}></textarea>
          </div>
        </form>
      </div>
    </Layout>
  );
};

function getLinkPage (pageid: string, state: LinkPage[]) {
  const linkPage = state.filter(linkpage => linkpage.pageid === pageid);
  return linkPage[0];
}
import EditAvatar from '@/components/EditLinkPage/EditAvatar';
import EditLink from '@/components/EditLinkPage/EditLink';
import Layout from '@/components/Layout';
import { RootState } from '@/store';
import { LinkPage } from '@/types/User';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface IEditLinkPageProps {
}

export default function EditLinkPage () {
  const user = useSelector((state: RootState) => state.user);
  const linkPage = getLinkPage('page1', user.linkPages);

  const [avatarImg, setAvatarImg] = useState<string | undefined>(linkPage.avatarImg);
  const [name, setName] = useState(linkPage.name);
  const [description, setDescription] = useState(linkPage.description);

  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDescriptionChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Change state and sumbit changes to backend");
  };

  return (
    <Layout username={user.username} email={user.email}>
      <main className='px-5'>
        <form className='container max-w-3xl mx-auto my-0' onSubmit={submitForm}>
          <EditAvatar img={linkPage.avatarImg} letters={user.username[0]} onChange={setAvatarImg} />
          <div className='w-full p-8 mb-5 bg-white rounded-lg'>
            <h2 className='block text-center mb-2 font-semibold'>Name</h2>
            <input className='block mx-auto my-0 px-3 bg-gray-200 text-center rounded-md' type='text' value={name} onChange={onNameChangeHandler} />
          </div>
          <div className='w-full p-8 mb-5 bg-white rounded-lg'>
            <h2 className='block text-center mb-2 font-semibold'>Bio</h2>
            <textarea onChange={onDescriptionChangeHandler} className='block mx-auto my-0 py-3 px-5 bg-gray-200 w-96 h-32 text-left rounded-md' value={description}></textarea>
          </div>
          {
            linkPage.links.map(link => <EditLink link={link} />)
          }
          <div className='flex justify-end'>
            <Link href={`/user/${user.username}`} className='text-white bg-red-400 rounded-md p-3 mr-3 font-semibold'>Cancel</Link>
            <button type="submit" className='text-white bg-green-400 rounded-md p-3 font-semibold' >Save Changes</button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

function getLinkPage (pageid: string, state: LinkPage[]) {
  const linkPage = state.filter(linkpage => linkpage.pageid === pageid);
  return linkPage[0];
}

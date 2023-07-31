import EditAvatar from '@/components/EditLinkPage/EditAvatar';
import EditLink from '@/components/EditLinkPage/EditLink';
import Layout from '@/components/Layout';
import Avatar from '@/components/MainLinkPage/Avatar';
import DescriptionBox from '@/components/MainLinkPage/DescriptionBox';
import LinkList from '@/components/MainLinkPage/LinkList';
import { RootState } from '@/store';
import { userActions } from '@/store/user-slice';
import { LinkPage, SocialMediaLink } from '@/types/User';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ColorChangeHandler, ColorResult, SketchPicker } from 'react-color';
import ColorPicker from '@/components/common/ColorPicker';

export interface IEditLinkPageProps {
}

export default function EditLinkPage () {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const { linkpageid } = router.query;
  const linkPage = getLinkPage(linkpageid as string, user.linkPages);

  const [avatarImg, setAvatarImg] = useState<string | undefined>(linkPage.avatarImg);
  const [name, setName] = useState(linkPage.name);
  const [description, setDescription] = useState(linkPage.description);
  const [links, setLinks] = useState(linkPage.links);
  const [pageid, setPageid] = useState(linkpageid as string);

  const [nameColor, setNameColor] = useState('#fff');

  const wrapLinks = (link: SocialMediaLink, index: number) => {
    setLinks(prevLinks => {
      const newState = [...prevLinks];
      newState[index] = link;
      return newState;
    });
  };

  const onLinkDelete = (index: number) => {
    setLinks(prevLinks => {
      let newState = [...prevLinks];
      newState.splice(index, 1);
      return newState;
    });
  };

  const onPageIdChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageid(e.target.value);
  };

  const onAvatarChangeHandler = (img: string) => {
    setAvatarImg(img);
  };

  const onNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDescriptionChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const addNewLink = () => {
    const defaultLink: SocialMediaLink = {
      img: 'https://w7.pngwing.com/pngs/968/223/png-transparent-logo-twitch-logos-brands-icon-thumbnail.png',
      title: 'Write the title',
      subtitle: 'Write the subtitle',
      url: 'default'
    };

    setLinks(prevLinks => {
      const newState = [...prevLinks];
      newState.push(defaultLink);
      return newState;
    });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const newLinkPage: LinkPage = {
      _id: linkPage._id,
      pageid, avatarImg, name, description, links
    };
    // dispatch(userActions.replaceLinkPage(newLinkPage));
    const response = await fetch('http://localhost:3000/api/linkpage', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        username: user.username,
        linkpage: newLinkPage,
        linkpageid: linkPage.pageid
      })
    });

    const data = await response.json();
    if (response.status === 201) {
      window.history.replaceState({}, '', `/user/${user.username}/edit/${pageid}`);
      toast.success(data.payload);
    } else {
      console.error(data.payload);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout username={user.username} email={user.email}>
      <main className='bg-gray-100 flex'>
        <form className='container max-w-3xl h-full mx-auto py-10 w-full basis-2/3 overflow-auto px-5'
          onSubmit={submitForm}>
          <EditAvatar
            letters={user.username[0]}
            onChange={onAvatarChangeHandler}
            img={linkPage.avatarImg} />
          <div className='w-full p-8 mb-5 bg-white rounded-lg'>
            <h2 className='block text-center mb-2 font-semibold'>Name</h2>
            <div className='mx-auto my-0 flex justify-center items-center mb-5'>
              <input className='px-3 bg-gray-200 text-center rounded-md mr-2'
                type='text'
                value={name}
                onChange={onNameChangeHandler} />
              <ColorPicker className='w-fit'
                defaultColor={nameColor}
                setNewColor={setNameColor} />
            </div>
            <h2 className='block text-center mb-2 font-semibold'>Change your Link Page URL</h2>
            <div className='mx-auto w-fit flex'>
              <label>www.linkapp.com/</label>
              <input className='mx-auto my-0 bg-gray-200 text-center rounded-md'
                type='text'
                value={pageid}
                onChange={onPageIdChangeHandler} />
            </div>
          </div>
          <div className='w-full p-8 mb-5 bg-white rounded-lg'>
            <h2 className='block text-center mb-2 font-semibold'>Bio</h2>
            <textarea className='block mx-auto my-0 py-3 px-5 bg-gray-200 w-96 h-32 text-left rounded-md'
              onChange={onDescriptionChangeHandler}
              value={description}></textarea>
          </div>
          <div className='w-full mb-10'>
            {
              links.map(
                (link, index) => <EditLink
                  link={link}
                  key={link.title}
                  index={index}
                  onChange={wrapLinks}
                  onDelete={onLinkDelete} />)
            }
            <button className='bg-green-400 rounded w-full'
              type='button'
              onClick={addNewLink}>
              <i className="fa-solid fa-plus text-white"></i>
            </button>
          </div>
          <div className='flex justify-end'>
            <Link href={`/user/${user.username}`} className='text-white bg-red-400 rounded-md p-3 mr-3 font-semibold'>Cancel</Link>
            <button className='text-white bg-green-400 rounded-md p-3 font-semibold'
              type="submit" >Save Changes</button>
          </div>
        </form>
        <div className='w-full basis-1/3 px-5 py-10'>
          <div className='bg-orange-400 rounded-2xl sticky top-5 overflow-y-scroll right-30 max-w-xs' style={{ 'maxHeight': '34rem' }}>
            {/* <div className='bg-black bg-opacity-40 py-10 px-5 relative' > */}
            <div className='py-10 px-5 relative' >
              <span className='text-white font-bold text-sm absolute top-2 left-3'>PREVIEW</span>
              <Link className='text-white font-bold text-sm absolute top-2 right-3' href={`/${linkpageid}`}>Go to page <i className="fa-solid fa-link"></i></Link>
              <div className='max-w-md mx-auto'>
                <div className='mb-10'>
                  <Avatar name={name} img={avatarImg} />
                  <h1 className='font-bold text-xl text-center' style={{ "color": nameColor }}>{name}</h1>
                  <DescriptionBox description={description} />
                </div>
                {links && <LinkList links={links} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

function getLinkPage (pageid: string, state: LinkPage[]) {
  const linkPage = state.filter(linkpage => linkpage.pageid === pageid);
  return linkPage[0];
}

import { SocialMediaLink } from '@/types/User';
import * as React from 'react';

export interface IEditLinkProps {
  link: SocialMediaLink;
}

export default function EditLink (props: IEditLinkProps) {
  const { link } = props;
  return (
    <div>
      <div>
        <img src={link.img} />
      </div>
      <div>
        <input type='text' value={link.title} />
        <input type='text' value={link.subtitle} />
      </div>
      <button>Delete</button>
    </div>
  );
}

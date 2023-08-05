import * as React from 'react';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className="text-center p-5 border bg-gray-100">
      <span className="font-semibold">
        A page made in a hurry{' '}
        <i className="fa-regular fa-registered fa-xs"></i>
      </span>
    </div>
  );
}

import * as React from 'react';

export interface IDescriptionBoxProps {
  description: string;
}

export default function DescriptionBox (props: IDescriptionBoxProps) {
  return (
    <div className='text-center p-2'>
      {props.description}
    </div>
  );
}

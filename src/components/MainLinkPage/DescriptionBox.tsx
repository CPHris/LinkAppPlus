import * as React from 'react';

export interface IDescriptionBoxProps {
  description: string;
  textColor?: string;
}

export default function DescriptionBox (props: IDescriptionBoxProps) {
  const textColor = props.textColor ? props.textColor : "black";
  return (
    <div className='text-center p-2 text-white text-sm' style={{ 'color': textColor }}>
      {props.description}
    </div >
  );
}

import * as React from 'react';

export interface IDescriptionBoxProps {
  description: string;
}

export default function DescriptionBox (props: IDescriptionBoxProps) {
  return (
    <div>
      {props.description}
    </div>
  );
}

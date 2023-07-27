import Link from 'next/link';
import * as React from 'react';

export interface IBannerProps {
}

export default function Banner (props: IBannerProps) {
  return (
    <div>
      <Link href='/'>Get your own link page</Link>
    </div>
  );
}

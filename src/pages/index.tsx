import Link from 'next/link';


export default function Home () {
  return (
    <>
      <h1>I'm the landing page</h1>
      <Link href='/register'> Go to the app</Link>
    </>
  );
}

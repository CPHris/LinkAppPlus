import Link from 'next/link';
import Image from 'next/image';
import Chicken from '@/assets/chicken-dance.gif';

export default function Custom404() {
  return (
    <>
      <div className="error-page relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative flex flex-col bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <h2 className="text-center">Page Not Found</h2>
          <Image
            src={Chicken}
            alt={'Funky chicken'}
            className="flex rounded-2xl m-3 self-center"
            width={200}
          />
          <p className="text-center">
            Let the chicken guide you back to the{' '}
            <Link href="/" className="text-cyan-500">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

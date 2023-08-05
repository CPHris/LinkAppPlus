import Footer from '@/components/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import phone from '@/assets/phone_14_01.jpg';
import avatar from '@/assets/profile-picture.png';

export default function Home() {
  return (
    <>

      <div className='flex flex-col h-screen'>
        <div className='mb-5 border-b border-gray-400 relative bg-gray-100 shadow-sm'>
          <div className='flex justify-between items-center px-4 py-2 max-w-4xl mx-auto'>
            <div className='font-bold text-lg'>LinkApp</div>
            <Link href='/login' className='block w-fit bg-cyan-500 rounded-lg py-1 px-3 text-white font-semibold hover:bg-cyan-400'>Sign in  <i className="fa-solid fa-right-to-bracket"></i></Link>

          </div>
        </div>
        <main className="bg-white mb-auto mx-auto w-full max-w-2xl">
          <section className="flex basis-1/2 p-4 w-full mb-10">
            <div className="w-full mr-16">
              <h2 className="font-bold text-5xl mb-5 text-right">
                All your links in one place
              </h2>
              <p className="text-xl text-right">
                Showcase your social media links and keep it simple
              </p>
            </div>
            <div className="w-full">
              <Image
                src={phone}
                alt={'A picture of a smartphone'}
                className="rounded-2xl"
              />
            </div>
          </section>
          <section className="flex basis-1/2 p-4 w-full items-center mb-10">
            <div className="w-full">
              <div className="relative w-fit mx-auto">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="mt-0 mb-5 mx-auto w-36 rounded-full"
                />
                <div className="absolute bottom-0 right-0">
                  <div className="bg-red-500 text-white font-bold text-xs rounded-full w-fit p-5 relative">
                    <p className="absolute top-3 left-2">LIVE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full ml-16">
              <h2 className="font-bold text-5xl mb-10">
                Let everyone know when you are live
              </h2>
              <Link
                href="/register"
                className="bg-cyan-500 rounded-lg p-3 text-white font-semibold hover:bg-cyan-400"
              >
                Get your link page
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

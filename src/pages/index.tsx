import Footer from '@/components/Layout/Footer';
import Link from 'next/link';


export default function Home () {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='mb-5 border-b border-gray-400 relative'>
          <div className='flex justify-between items-center px-4 py-2 max-w-4xl mx-auto'>
            <div className='font-bold text-lg'>LinkApp</div>
            <Link href='/register'>Sign in <i className="fa-solid fa-right-to-bracket"></i></Link>
          </div>
        </div>
        <main className='bg-white mb-auto mx-auto w-full max-w-2xl'>
          <section className='flex justify-between p-2 w-full mb-10'>
            <div>
              <h2 className='font-bold text-xl'>All your links in one place</h2>
              <p>Showcase your social media links and keep it simple</p>
            </div>
            <div>
              mockup img
            </div>
          </section>
          <section className='flex justify-between p-2'>
            <div>sdfsdf</div>
            <h2 className='font-bold text-xl'>Let everyone know when you are live</h2>
          </section>
          <Link href='/register'> Go to the app</Link>
        </main>
        <Footer />
      </div>
    </>
  );
}

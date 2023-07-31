import Footer from '@/components/Layout/Footer';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

export interface IRegisterPageProps {
}

export default function RegisterPage (props: IRegisterPageProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='mb-5 border-b border-gray-400 relative'>
          <div className='flex justify-between items-center px-4 py-2 max-w-4xl mx-auto'>
            <div className='font-bold text-lg'>LinkApp</div>
            {/* <Link href='/register' className='block w-fit bg-cyan-500 rounded-lg py-1 px-3 text-white font-semibold hover:bg-cyan-600'>Sign in  <i className="fa-solid fa-right-to-bracket"></i></Link> */}
          </div>
        </div>
        <main className='bg-white mb-auto mx-auto w-full max-w-2xl'>
          <div className='w-full max-w-xs rounded-2xl border p-5 mx-auto shadow-md'>
            <h1 className='font-bold text-center'>Create an account</h1>
            <form className='p-4'>
              <label className='block font-semibold text-sm'>Username</label>
              <input type='text' className='block border-2 mb-2 rounded'></input>
              <label className='block font-semibold text-sm'>Email</label>
              <input type='email' className='block border-2 mb-2 rounded'></input>
              <label className='block font-semibold text-sm'>Pasword</label>
              <input type='password' className='block border-2 mb-2 rounded'></input>
              <label className='block font-semibold text-sm'>Confirm password</label>
              <input type='password' className='block border-2 mb-2 rounded mb-8'></input>
              <button className='block bg-cyan-500 rounded-lg px-3 py-2 text-white font-semibold text-sm hover:bg-cyan-400'>Create Account</button>
            </form>
            <Link className='px-4 text-cyan-500 hover:underline hover:text-cyan-400 text-sm' href='/login'>I already have an account</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

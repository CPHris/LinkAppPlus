import Footer from '@/components/Layout/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export interface IRegisterPageProps {
}

export default function RegisterPage (props: IRegisterPageProps) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const requestBody = { username };

    fetch('http://localhost:3000/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(requestBody)
    }).then(response => {
      if (response.status === 200) {
        return router.push(`/user/${username}`);
      }
      if (response.status === 404) {
        response.json().then(data => {
          toast.error(data.message);
        });
      }
    });
  };

  return (
    <>
      <div className='flex flex-col h-screen bg-gray-100'>
        <div className='mb-5 border-b border-gray-400 relative shadow-sm'>
          <div className='flex justify-between items-center px-4 py-2 max-w-4xl mx-auto'>
            <div className='font-bold text-lg'>LinkApp</div>
            {/* <Link href='/register' className='block w-fit bg-cyan-500 rounded-lg py-1 px-3 text-white font-semibold hover:bg-cyan-600'>Sign in  <i className="fa-solid fa-right-to-bracket"></i></Link> */}
          </div>
        </div>
        <main className='mb-auto mx-auto my-auto w-full max-w-2xl'>
          <div className='w-full max-w-xs rounded-2xl border p-5 mx-auto shadow-md bg-white'>
            <h1 className='font-bold text-center'>Create an account</h1>
            <form className='p-4' onSubmit={submitForm}>
              <label className='block font-semibold text-sm'>Username</label>
              <input type='text' className='block border-2 mb-2 rounded'
                value={username}
                required
                onChange={(e) => { setUsername(e.target.value); }}></input>

              <label className='block font-semibold text-sm'>Pasword</label>
              <input type='password' className='block border-2 mb-2 rounded mb-8'
                value={password}
                onChange={(e) => { setPassword(e.target.value); }}></input>
              <button className='block bg-cyan-500 rounded-lg px-3 py-2 text-white font-semibold text-sm hover:bg-cyan-400'>Login</button>
            </form>
            <Link className='px-4 text-cyan-500 hover:underline hover:text-cyan-400 text-sm' href='/register'>I don't have an account</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

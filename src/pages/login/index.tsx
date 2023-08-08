import { http } from '@/apiService';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export interface IRegisterPageProps {}

export default function RegisterPage(props: IRegisterPageProps) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const response = await http.login(username);
    if (response && response.status === 200) {
      return router.push(`/user/${username}`);
    }
    toast.error('Wrong credentials');
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="mb-5 border-brelative shadow-sm">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-400 relative bg-gray-100 shadow-sm min-h-[60px]">
            <div className="font-bold text-lg">
              <h1>
                LinkApp<span className="text-cyan-500">Plus</span>
              </h1>
            </div>
          </div>
        </div>
        <main className="mb-auto mx-auto my-auto w-full max-w-2xl">
          <div className="w-full max-w-xs rounded-2xl border p-5 mx-auto shadow-md bg-white">
            <h4 className="font-bold text-center">Login</h4>
            <form className="p-4" onSubmit={submitForm}>
              <label className="block font-semibold text-sm">Username</label>
              <input
                type="text"
                className="block border-2 mb-2 rounded px-1 w-full"
                value={username}
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <label className="block font-semibold text-sm">Password</label>
              <input
                type="password"
                placeholder="password"
                className="block border-2 mb-2 rounded mb-8 px-1 w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button className="block bg-cyan-500 rounded-lg px-3 py-2 text-white font-semibold text-sm hover:bg-cyan-400">
                Login
              </button>
            </form>
            <Link
              className="px-4 text-cyan-500 hover:underline hover:text-cyan-400 text-sm"
              href="/register"
            >
              I don&apos;t have an account
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

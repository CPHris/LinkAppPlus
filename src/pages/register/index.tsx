
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const response = await http.register(username, email);
    if (response && response.status === 201) {
      return router.push(`/user/${username}`);
    }
    toast.error('User already exists');
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="mb-5 border-b border-gray-400 relative">
          <div className="flex justify-between items-center px-4 py-2 max-w-4xl mx-auto">
            <div className="font-bold text-lg">LinkAppPlus</div>
          </div>
        </div>
        <main className="mb-auto mx-auto my-auto w-full max-w-2xl">
          <div className="w-full max-w-xs rounded-2xl border p-5 mx-auto shadow-md bg-white">
            <h1 className="font-bold text-center">Create an account</h1>
            <form className="p-4" onSubmit={submitForm}>
              <label className="block font-semibold text-sm">Username</label>
              <input
                type="text"
                placeholder="username"
                className="block border-2 mb-2 rounded px-1 w-full"
                value={username}
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <label className="block font-semibold text-sm">Email</label>
              <input
                type="email"
                placeholder="email"
                className="block border-2 mb-2 rounded px-1 w-full"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <label className="block font-semibold text-sm">Password</label>
              <input
                id="reg-pass-1"
                type="password"
                placeholder="password"
                className="block border-2 mb-2 rounded px-1 w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <label className="block font-semibold text-sm">
                Confirm password
              </label>
              <input
                id="reg-pass-2"
                type="password"
                placeholder="confirm password"
                className="block border-2 mb-2 rounded mb-8 px-1 w-full"
                value={confirmedPassword}
                onChange={(e) => {
                  setConfirmedPassword(e.target.value);
                }}
              ></input>
              <button id="reg-btn" className="block bg-cyan-500 rounded-lg px-3 py-2 text-white font-semibold text-sm hover:bg-cyan-400">
                Create Account
              </button>
            </form>
            <Link
              className="px-4 text-cyan-500 hover:underline hover:text-cyan-400 text-sm"
              href="/login"
            >
              I already have an account
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}


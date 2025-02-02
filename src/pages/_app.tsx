import Layout from '@/components/Layout';
import store from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LinkAppPlus</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer position="bottom-center" />
      </Provider>
    </>
  );
}

import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App ({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isUserPage = router.pathname.match(/^\/user\/\[\w+\]($|\/)/);
  return (
    <>
      {isUserPage ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : <Component {...pageProps} />
      }
    </>

  );
}

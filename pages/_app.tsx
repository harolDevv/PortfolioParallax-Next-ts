import Head from 'next/head';
import { AppProvider } from '@/Context/AppProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>HarolDev</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

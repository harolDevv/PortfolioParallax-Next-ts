import Head from 'next/head';
import { AppProvider } from '@/Context/AppProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>HarolDev</title>
        <meta name="description" content="Descubre mi portafolio de programacion como Full Stack Developer. Explora  mis proyectos proyectos a lo largo de mi carrera y toda mi experiencia tanto como Frontend y Full Stack Developer" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

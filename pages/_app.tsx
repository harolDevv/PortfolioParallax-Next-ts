import { Layout } from '@/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout title='HarolDev'>
      <Component {...pageProps} />
    </Layout> 
  )
}

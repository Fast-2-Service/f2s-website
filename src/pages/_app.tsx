import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { SSRProvider } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

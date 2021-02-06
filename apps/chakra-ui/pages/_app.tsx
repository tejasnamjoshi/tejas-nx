import './styles.css';

import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Welcome to chakra-ui!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to chakra-ui!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ChakraProvider>
  );
}

export default CustomApp;

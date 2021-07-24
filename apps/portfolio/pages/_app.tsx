import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tejas Namjoshi!</title>
        {/* <script
          src="https://kit.fontawesome.com/f6fe727f00.js"
          crossOrigin="anonymous"
        ></script> */}
      </Head>
      <div className="app bg-white dark:bg-black dark:text-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default CustomApp;

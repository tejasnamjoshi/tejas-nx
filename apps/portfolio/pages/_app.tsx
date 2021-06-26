import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/layout/layout';
import Navbar from '../components/navbar/navbar';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tejas Namjoshi!</title>
        <script
          src="https://kit.fontawesome.com/f6fe727f00.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="app bg-white dark:bg-black dark:text-white">
        <header className="flex"></header>
        <Layout>
          <Navbar />
          <main className="flex flex-col h-screen w-full px-10">
            <Component {...pageProps} />
          </main>
          <footer className="d-flex h-24">Footer</footer>
        </Layout>
      </div>
    </>
  );
}

export default CustomApp;

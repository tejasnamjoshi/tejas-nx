import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import Navbar from '../components/navbar/Navbar';

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to star-wars!</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="text-center ">
        <h1 className="color-yellow">SWAPI</h1>
        <p>The Star wars API</p>
      </div>
      <div className="d-flex justify-content-center container-fluid">
        <div className="w-25">
          <Navbar />
        </div>
        <div className="w-50">
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
          </QueryClientProvider>
        </div>
      </div>
    </>
  );
}

export default CustomApp;

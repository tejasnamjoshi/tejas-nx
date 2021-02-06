import 'tailwindcss/tailwind.css';

import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';

import Navbar from '../components/navbar/Navbar';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div>
        <Navbar />
        <main className="flex justify-center mx-auto dark:bg-black text-black dark:text-white">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default CustomApp;

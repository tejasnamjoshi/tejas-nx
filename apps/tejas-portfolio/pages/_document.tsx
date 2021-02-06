import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Welcome to tejas-portfolio!</title>
          <script
            src="https://kit.fontawesome.com/f6fe727f00.js"
            crossOrigin="anonymous"
          ></script>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

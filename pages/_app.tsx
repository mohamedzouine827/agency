import React from 'react';
import Head from 'next/head';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function ZnAgency({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Head>
          <title>ZnAgency</title>
        </Head>
        <Component {...pageProps} />
      </div>
  );
}

export default ZnAgency;
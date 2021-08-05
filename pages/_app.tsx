import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/dist/next-server/lib/head'
import React from 'react'
import '../styles/global.scss'


 const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Love&Beauty</title>
        <link key={0} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
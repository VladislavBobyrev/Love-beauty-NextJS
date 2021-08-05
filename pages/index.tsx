import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/hader/header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Love&Beauty</title>
        <link key={0} rel="icon" href="/header/logoLoveBeauty.png" />
      </Head>

			<Header />
 
      <main className='main'>

      </main>

      <footer className='footer'>
      </footer>
    </>
  )
}

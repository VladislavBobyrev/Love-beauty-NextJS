import { Main } from '../components/main/main'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/hader/header'
import { Footer } from '../components/footer/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Love&Beauty</title>
        <link key={0} rel="icon" href="/header/logoLoveBeauty.png" />
      </Head>

			<Header />
			<Main/>
			<Footer/>
    </>
  )
}

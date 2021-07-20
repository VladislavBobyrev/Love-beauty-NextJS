import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import Head from 'next/dist/next-server/lib/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>MyTop</title>
				<link rel="icon" href="/fovicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

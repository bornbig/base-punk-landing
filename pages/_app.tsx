import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BASEDSTR - NFT Dashboard</title>
        <meta name="description" content="Turning Based Punks into a Perpetual Market Machine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Tailwind CSS CDN */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      
      <Component {...pageProps} />
    </>
  )
}

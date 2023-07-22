import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import Script from 'next/script'

export default function Nextra({ Component, pageProps }) {
  const MEASUREMENT_ID = process.env.MEASUREMENT_ID
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', ${MEASUREMENT_ID});
             
          `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

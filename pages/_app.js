import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import Script from 'next/script'

export default function Nextra({ Component, pageProps }) {
  const shouldTrack = process.env.NODE_ENV === 'production'

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

      {shouldTrack ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-3C9HJTFZVX`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {` 
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'G-3C9HJTFZVX');
             
          `}
          </Script>
        </>
      ) : null}

      <Component {...pageProps} />
    </>
  )
}

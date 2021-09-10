import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return <>
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
    <Component {...pageProps} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55182697-1"></script>
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer=window.dataLayer||[]
      function gtag(){dataLayer.push(arguments)}
      gtag('js',new Date)
      gtag('config','UA-55182697-1')
    />
  </>
}

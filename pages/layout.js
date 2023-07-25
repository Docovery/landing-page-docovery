import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const googleUrl = "https://www.googletagmanager.com/gtag/js?id=" + process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  const script = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `
  
  return (
    <>
      <Head>
        <title>Docovery | Landing Page</title>
        <meta name="title" content="Docovery" />
        <meta name="description" content="Building solutions, Shaping the future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://docovery.netlify.app/docovery_logo.svg" />
        <link rel="apple-touch-icon" href="https://docovery.netlify.app/docovery_logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docovery.netlify.app" />
        <meta property="og:title" content="Docovery" />
        <meta property="og:description" content="Building solutions, Shaping the future" />
        <meta property="og:image" content="https://docovery.netlify.app/docovery_logo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://docovery.netlify.app" />
        <meta property="twitter:title" content="Docovery" />
        <meta property="twitter:description" content="Building solutions, Shaping the future" />
        <meta property="twitter:image" content="https://docovery.netlify.app/docovery_logo.svg" />
      </Head>
      <div className={inter.className}>{children}</div>
      <Script strategy="lazyOnload" src={googleUrl}></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {script}
      </Script>
    </>
  );
}

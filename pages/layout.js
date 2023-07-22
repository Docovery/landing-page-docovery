import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Docovery | Landing Page</title>
        <meta name="title" content="Docovery" />
        <meta name="description" content="Building solutions, Shaping the future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/docovery_logo.svg" />
        <link rel="icon" type="image/x-icon" href="/docovery_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/docovery_logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docovery.netlify.app" />
        <meta property="og:title" content="Docovery" />
        <meta property="og:description" content="Building solutions, Shaping the future" />
        <meta property="og:image" content="/docovery_logo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://docovery.netlify.app" />
        <meta property="twitter:title" content="Docovery" />
        <meta property="twitter:description" content="Building solutions, Shaping the future" />
        <meta property="twitter:image" content="/docovery_logo.svg" />
      </Head>
      <div className={inter.className}>{children}</div>
    </>
  );
}

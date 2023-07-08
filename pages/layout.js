import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Docovery | Landing Page</title>
        <meta name="title" content="Docovery" />
        <meta name="description" content="Docovery landing page" />
        <link rel="icon" href="docovery_logo.svg" />
      </Head>
      <div className={inter.className}>{children}</div>
    </>
  );
}

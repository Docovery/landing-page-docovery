import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
      <title>Docovery | Landing Page</title>
      </Head>
      <div className={inter.className}>{children}</div>
    </>
  )
}

import '@/styles/globals.css';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title> InventPe - Invest to pay, Invest to spent </title>
        <meta name="description" content="Knowledge Based Investing & Trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  )
}


export default App;
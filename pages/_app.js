
import '../styles/globals.css'
import '../css/style.css'
import '../css/form.css'

import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WorkingBee | Give time to a cause</title>
      </Head>
      <Header />

      <Component {...pageProps} />
      {/* <div className="grid wrapper">
        
      </div> */}
      <Footer />
    </>
  )
}

export default MyApp

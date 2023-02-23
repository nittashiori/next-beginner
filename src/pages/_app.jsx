import Head from 'next/head'
import 'src/styles/globals.css'
import Header from "src/components/Molecules/Header"
import Footer from "src/components/Molecules/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

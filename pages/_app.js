
import '../styles/globals.css'
// import '../css/style.css'
// import '../css/form.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>WorkingBee | Give time to a cause</title>
        </Head>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </ApolloProvider>
    </>
  )
}

export default MyApp

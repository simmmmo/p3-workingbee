import "../styles/globals.css";
// import '../css/style.css'
// import '../css/form.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { SessionProvider } from "next-auth/react";

import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <Head>
            <title>WorkingBee | Give time to a cause</title>
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

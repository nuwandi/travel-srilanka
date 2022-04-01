import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
import Head from 'next/head'

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
        <title>Travel Sri Lanka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  return <Component {...pageProps} />
}

export default MyApp

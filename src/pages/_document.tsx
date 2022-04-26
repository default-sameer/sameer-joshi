import Document, { Head, Html, Main, NextScript } from 'next/document';
import Meta from '../components/meta';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" data-theme='black'>
        <Head>
          <link
            rel="preload"
            href="/fonts/work-sans-variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
        </Head>
        <Meta />
        <body style={{ overflowX: 'hidden' }}>
          <Main />
          <NextScript />
          <script
            data-goatcounter="https://5ms89eqxkk7k.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

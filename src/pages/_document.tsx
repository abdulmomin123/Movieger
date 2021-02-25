import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        {/* Global HTML */}
        <title>The Ultimate Movie Site</title>
        <link
          href="https://fonts.googleapis.com/css?family=Arimo:400,700,400italic,700italic&amp;subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        ></link>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

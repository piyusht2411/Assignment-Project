import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Widget for dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Widget</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'





class Website extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=750, user-scalable=0" name="viewport" />
          <meta content="#0d1011" name="theme-color" />
          <link href="static/favicon.ico" rel="shortcut icon" />

        </Head>
        <body>
          <noscript>{'Javascript is required to view this site, silly!'}</noscript>

          <Main className="next-wrapper" />

          <NextScript />
        </body>
      </html>
    )
  }
}




export default Website

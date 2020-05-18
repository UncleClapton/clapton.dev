// Module Imports
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'


// Component Imports
import OAuthGenerator from '~/components/OAuthGenerator'
import styles from '~/css/pages/oauthtest.module.css'





function OAuthTest (ctx) {
  const { query } = useRouter()
  const hasQuery = Boolean(Object.keys(query ?? {}).length)
  return (
    <>
      <Head><title>{'FuelRats Oauth Tester'}</title></Head>
      <div className={['card', styles.page]}>
        <div className={styles.page}>
          <h1 className={styles.title}>{'Fuel Rats OAuth Tester'}</h1>
          <span>{'Test for fuelrats.com implicit auth flow'}</span>
          <br />
          {
            hasQuery && (
              <pre>
                {JSON.stringify(query)}
              </pre>
            )
          }
          {
            !hasQuery && (
              <OAuthGenerator />
            )
          }
        </div>
      </div>
    </>
  )
}




export default OAuthTest

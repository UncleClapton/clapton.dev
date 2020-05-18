// Module Imports
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import JSONTree from 'react-json-tree'

// Component Imports
import OAuthGenerator from '~/components/OAuthGenerator'
import styles from '~/css/pages/oauthtest.module.css'
import base16Brewer from '~/themes/base16-brewer'





function OAuthTest () {
  const { query } = useRouter()
  const hasQuery = Boolean(Object.keys(query ?? {}).length)
  return (
    <>
      <Head><title>{'FuelRats Oauth Tester'}</title></Head>
      <div className={['card', styles.page]}>
        <div className={styles.page}>
          <h1 className={styles.title}>{'Fuel Rats OAuth Tester'}</h1>
          <br />
          {
            hasQuery
              ? (<div className={styles.jsonTree}><JSONTree data={query} invertTheme={false} theme={base16Brewer} /></div>)
              : (
                <>
                  <span>{'Test for fuelrats.com implicit auth flow'}</span>
                  <br />
                  <OAuthGenerator />
                </>
              )
          }
        </div>
      </div>
    </>
  )
}




export default OAuthTest

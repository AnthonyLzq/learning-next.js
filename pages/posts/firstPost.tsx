import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

// import Script from 'next/script'

const FirstPost: NextPage = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => {
          console.log('Script loaded correctly, window.FB has been populated')
        }}
      /> */}
    </Layout>
  )
}

export default FirstPost

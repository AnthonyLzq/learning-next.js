import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I&apos;m Anthony Luzquinos, a Full Stack MERN Developer</p>
        <p>This is a sample website</p>
        <Link href=''>Read my first post</Link>{' '}
      </section>
    </Layout>
  )
}

export default Home

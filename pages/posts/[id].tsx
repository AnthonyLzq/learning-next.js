import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Layout from '../../components/Layout'
import Date from '../../components/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

/**
 * This is need it when you want to Statically Generate Pages with Dynamic Routes
 * 1. A React component to render the page
 * 2. getStaticPaths which returns an array of possible values for id
 * 3. getStaticProps which fetches necessary data for the post with id
 */
type PostProps = {
  postData: {
    id: string
    date: string
    title: string
    contentHtml: string
  }
}

const Post: NextPage<PostProps> = props => {
  const {
    postData: { id, date, title, contentHtml }
  } = props

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}

const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) throw new Error('Idk')

  const postData = await getPostData(params.id as string)

  return {
    props: {
      postData
    }
  }
}

export { getStaticPaths, getStaticProps }

export default Post

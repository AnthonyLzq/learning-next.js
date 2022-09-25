import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

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
  }
}

const Post: NextPage<PostProps> = props => {
  const {
    postData: { id, date, title }
  } = props

  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
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

const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params?.id) throw new Error('Idk')

  const postData = getPostData(params.id as string)

  return {
    props: {
      postData
    }
  }
}

export { getStaticPaths, getStaticProps }

export default Post

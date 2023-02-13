import styles from './post.module.css'
import Head from 'next/head'
import PostHeader from './post-header'
import PostBody from './post-body'
import type PostType from '../../interfaces/post'
import { BLOG_TITLE } from '../../lib/constants'

type Props = {
  post: PostType
}

const Post = ({ post }: Props) => {
  return (
    <article className={styles.wrapper}>
      <Head>
        <title>
          {post.title} | {BLOG_TITLE}
        </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
      />
      <PostBody content={post.content} />
    </article>
  )
}

export default Post

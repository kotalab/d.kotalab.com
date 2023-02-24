import styles from './post-list\.module.css'
import PostPreview from '../post-preview'
import type Post from '../../interfaces/post'

type Props = {
  title: string
  posts: Post[]
}

const PostList = ({ title, posts }: Props) => {
  return (
    <section>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default PostList

import PostPreview from "@components/post-preview";

import type Post from "@interfaces/post";

import styles from "./post-list.module.css";

type Props = {
  title: string;
  posts: Post[];
};

const PostList = ({ title, posts }: Props) => (
  <section>
    <h2 className={styles.heading}>{title}</h2>
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
);

export default PostList;

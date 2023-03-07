import Head from "next/head";

import { BLOG_TITLE } from "@lib/constants";

import PostBody from "./post-body";
import PostHeader from "./post-header";

import type PostType from "@interfaces/post";

import styles from "./post.module.css";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => (
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
);

export default Post;

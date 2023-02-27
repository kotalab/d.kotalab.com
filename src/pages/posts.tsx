import Head from "next/head";

import Container from "@components/container";
import Intro from "@components/intro";
import Layout from "@components/layout";
import PostList from "@components/post-list";
import Post from "@interfaces/post";
import { getPosts } from "@lib/api";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "@lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Posts({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`${BLOG_TITLE} | ${BLOG_DESCRIPTION}`}</title>
      </Head>
      <Container>
        <Intro />
        {allPosts.length > 0 && <PostList title="記事一覧" posts={allPosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

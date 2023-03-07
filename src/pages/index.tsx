import Head from "next/head";

import Container from "@components/container";
import HeroPost from "@components/hero-post/hero-post";
import Intro from "@components/intro";
import Layout from "@components/layout";
import PostList from "@components/post-list";
import Post from "@interfaces/post";
import { getPosts } from "@lib/api";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "@lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Head>
        <title>{`${BLOG_TITLE} | ${BLOG_DESCRIPTION}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && (
          <PostList title="More stories" posts={morePosts} />
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    11,
  );

  return {
    props: { allPosts },
  };
};

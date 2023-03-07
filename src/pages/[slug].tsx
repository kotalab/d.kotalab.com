import ErrorPage from "next/error";
import { useRouter } from "next/router";

import Container from "@components/container";
import Header from "@components/header";
import Layout from "@components/layout";
import Post from "@components/post";
import PostTitle from "@components/post-title";
import { getPostBySlug, getPosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";

import type PostType from "@interfaces/post";

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <Post post={post} />
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

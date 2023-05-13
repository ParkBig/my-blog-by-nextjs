import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/posts-utill";
import { PostContent as Post } from "@/type/interface";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

const PostsDetailPage = ({ post }: { post: Post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const { params } = context;

  if (!params) return { notFound: true };

  const { slug } = params;
  const postData = getPostData(slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postsFileNames = getPostsFiles();
  const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostsDetailPage;

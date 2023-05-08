import AllPost from "@/components/posts/AllPost";
import { getAllPosts } from "@/lib/posts-utill";
import { Post } from "@/type/interface";
import Head from "next/head";

const AllPostsPage = ({posts}: {posts: Post[]}) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <AllPost posts={posts}/>
    </>
  )
};

export const getStaticProps = () => {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
};

export default AllPostsPage;

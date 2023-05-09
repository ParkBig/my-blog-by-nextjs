import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-utill";
import { PostContent } from "@/type/interface";
import Head from "next/head";

const AllPostsPage = ({posts}: {posts: PostContent[]}) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <AllPosts posts={posts}/>
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

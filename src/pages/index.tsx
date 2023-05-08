import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/posts-utill";
import { Post } from "@/type/interface";
import Head from "next/head";

const HomePage = ({posts}: {posts: Post[]}) => {
  return (
    <>
    <Head>
      <title>jw&apos; Blog</title>
      <meta name="description" content="I post about programming and web development."/>
    </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
};

export default HomePage;

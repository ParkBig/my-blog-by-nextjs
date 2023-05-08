import style from "@/components/home-page/featuredPosts.module.css"
import PostsGrid from "../posts/PostsGrid";
import { Post } from "@/type/interface";

const FeaturedPosts = ({posts}: {posts: Post[]}) => {
  return (
    <section className={style.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts;

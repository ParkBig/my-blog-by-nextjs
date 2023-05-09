import style from "@/components/posts/allPosts.module.css";
import PostsGrid from "./PostsGrid";
import { PostContent } from "@/type/interface";

const AllPosts = ({posts}: {posts: PostContent[]}) => {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default AllPosts;

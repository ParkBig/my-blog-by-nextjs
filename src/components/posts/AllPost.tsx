import style from "@/components/posts/allPosts.module.css";
import PostsGrid from "./PostsGrid";
import { Post } from "@/type/interface";

const AllPost = ({posts}: {posts: Post[]}) => {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default AllPost;

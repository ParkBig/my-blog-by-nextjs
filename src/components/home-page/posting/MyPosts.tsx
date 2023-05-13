import PostsGrid from "@/components/posts/PostsGrid";
import style from "./myPosts.module.css";
import { PostContent } from "@/type/interface";

const MyPosts = ({ posts }: { posts: PostContent[] }) => {
  return (
    <section className={style.latest} id="myPosts">
      <h2>My Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default MyPosts;

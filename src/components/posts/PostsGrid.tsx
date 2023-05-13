import style from "@/components/posts/postsGrid.module.css";
import { PostContent } from "@/type/interface";
import PostItem from "./PostItem";

const PostsGrid = ({ posts }: { posts: PostContent[] }) => {
  return (
    <ul className={style.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;

import style from "@/components/posts/postsGrid.module.css";
import { Post } from "@/type/interface";
import PostItem from "./PostItem";

const PostsGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={style.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
  )
}

export default PostsGrid;

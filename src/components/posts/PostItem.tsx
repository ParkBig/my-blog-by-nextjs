import style from "@/components/posts/postItem.module.css";
import { Post } from "@/type/interface";
import Image from "next/image";
import Link from "next/link";

const PostItem = ({post}: { post: Post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const imagePath = `/assets/posts/${post.slug}/${post.image}`;
  const lingPath = `/posts/${post.slug}`;

  return (
    <li className={style.post}>
      <Link href={lingPath}>
        <div className={style.image}>
          <Image src={imagePath} alt={post.title}  width={300} height={200} />
        </div>
        <div className={style.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem;

import style from "@/components/posts/post-detail/postHeader.module.css";
import Image from "next/image";

const PostHeader = ({ title, image }: {title: string, image: string}) => {


  return (
    <header className={style.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  )
}

export default PostHeader;

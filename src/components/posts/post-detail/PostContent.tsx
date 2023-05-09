import style from "@/components/posts/post-detail/postContent.module.css"
import PostHeader from "./PostHeader"
import ReactMarkdown from "react-markdown";
import { PostContent } from "@/type/interface";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }: { post: PostContent }) => {
  const imagePath = `/assets/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    //@ts-ignore
    p(paragraph) {
      const { node, children } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={style.image}>
            <Image
              src={`${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },

    //@ts-ignore
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={style.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
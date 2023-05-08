import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // md 파일의 메타데이터가 포함된 data 프로퍼티와 실제 콘텐츠가 있는 콘테츠 프로퍼티를 스트링으로 반환.
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(postFile => getPostData(postFile));

  //@ts-ignore
  const sortedPosts = allPosts.sort((a,b) => a.date > b.date ? -1: 1);

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  
  //@ts-ignore
  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
};

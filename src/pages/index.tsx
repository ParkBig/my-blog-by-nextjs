import Hero from "@/components/home-page/hero/Hero";
import MeSummary from "@/components/home-page/me-info/MeSummary";
import MyProject from "@/components/home-page/my-project/MyProject";
import MySkills from "@/components/home-page/my-skills/MySkills";
import MyPosts from "@/components/home-page/posting/MyPosts";
import { getAllProjects } from "@/lib/my-project-data";
import getMySkills from "@/lib/my-skills";
import { getAllPosts } from "@/lib/posts-utill";
import { PostContent, ProjectContent, SkillsContent } from "@/type/interface";
import Head from "next/head";

const HomePage = ({
  projects,
  skills,
  posts,
}: {
  projects: ProjectContent[];
  skills: SkillsContent[];
  posts: PostContent[];
}) => {
  return (
    <>
      <Head>
        <title>PJW&apos; Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <MeSummary />
      <MySkills skills={skills} />
      <MyProject projects={projects} />
      <MyPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();
  const projects = getAllProjects();
  const skills = getMySkills();

  return {
    props: {
      posts,
      projects,
      skills,
    },
  };
};

export default HomePage;

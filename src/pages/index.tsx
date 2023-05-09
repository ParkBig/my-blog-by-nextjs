import Hero from "@/components/home-page/hero/Hero";
import MeSummary from "@/components/home-page/me-info/MeSummary";
import MyProject from "@/components/home-page/my-project/MyProject";
import MySkills from "@/components/home-page/my-skills/MySkills";
import getAllProjects from "@/lib/my-project-data";
import getMySkills from "@/lib/my-skills";
import { getFeaturedPosts } from "@/lib/posts-utill";
import { ProjectContent, SkillsContent } from "@/type/interface";
import Head from "next/head";

const HomePage = ({ projects, skills }: { projects: ProjectContent[], skills: SkillsContent[] }) => {
  return (
    <>
      <Head>
        <title>jw&apos; Blog</title>
        <meta name="description" content="I post about programming and web development."/>
      </Head>
      <Hero />
      <MeSummary />
      <MySkills skills={skills} />
      <MyProject projects={projects} />
    </>
  )
}

export const getStaticProps = () => {
  const projects = getAllProjects();
  const skills = getMySkills();

  return {
    props: {
      projects,
      skills
    }
  }
};

export default HomePage;

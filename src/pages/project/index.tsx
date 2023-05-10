import AllProject from "@/components/home-page/my-project/AllProject";
import { getAllProjects } from "@/lib/my-project-data";
import { ProjectContent } from "@/type/interface";
import Head from "next/head";

const AllProjectPage = ({ projects }: { projects: ProjectContent[] }) => {
  return (
    <>
      <Head>
        <title>All Project</title>
        <meta name="description" content="A list of all project!" />
      </Head>
      <AllProject projects={projects} />
    </>
  )
}

export const getStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      projects
    }
  }
}

export default AllProjectPage;

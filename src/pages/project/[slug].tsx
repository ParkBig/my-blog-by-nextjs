import ProjectDetail from "@/components/project-detail/ProjectDetail";
import { getAllProjects, getProject } from "@/lib/my-project-data";
import { ProjectContent } from "@/type/interface";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

const ProjectDetailPage = ({ project }: { project: ProjectContent }) => {
  return (
    <>
      <Head>
        <title>Project | {project.title}</title>
        <meta name="description" content="my detail project" />
      </Head>
      <ProjectDetail project={project} />
    </>
  );
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const { params } = context;
  if (!params) return { notFound: true };

  const { slug } = params;
  const project = getProject(slug as string);

  return {
    props: {
      project,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const allProjects = getAllProjects();
  const slugs = allProjects.map((project) => project.title);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default ProjectDetailPage;

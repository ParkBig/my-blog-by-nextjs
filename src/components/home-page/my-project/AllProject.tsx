import style from "./allProject.module.css";
import { ProjectContent } from "@/type/interface";
import ProjectGrid from "./ProjectGrid";

const AllProject = ({ projects }: { projects: ProjectContent[] }) => {
  return (
    <section className={style.project}>
      <h1>All Project</h1>
      <ProjectGrid projects={projects}/>
    </section>
  )
}

export default AllProject;

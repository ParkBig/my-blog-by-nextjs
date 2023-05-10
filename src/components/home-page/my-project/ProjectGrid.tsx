import style from "./projectGrid.module.css"
import { ProjectContent } from "@/type/interface";
import ProjectItem from "./ProjectItem";

const ProjectGrid = ({ projects }: { projects: ProjectContent[] }) => {
  return (
    <ul className={style.grid}>
      {projects.map(project => <ProjectItem key={project.id} project={project} />)}
    </ul>
  )
}

export default ProjectGrid;

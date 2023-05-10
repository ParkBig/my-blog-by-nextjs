import { ProjectContent } from "@/type/interface";
import style from "./projectDetail.module.css";
import DetailContent from "./DetailContent";

const ProjectDetail = ({ project }: { project: ProjectContent }) => {
  return (
    <section className={style.upper}>
      <div className={style.lower}>
        <h2>{project.title}</h2>
        <h3>{project.subTitle}</h3>
      </div>
      <DetailContent project={project} />
    </section>
  )
}

export default ProjectDetail;

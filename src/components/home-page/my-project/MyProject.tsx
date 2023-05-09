import { ProjectContent } from "@/type/interface";
import style from "@/components/home-page/my-project/myProject.module.css";
import Image from "next/image";
import ProjectGrid from "@/components/project/ProjectGrid";

const MyProject = ({ projects }: { projects: ProjectContent[] }) => {
  return (
    <section className={style.latest} id="myProject">
      <div className={style.myProject}>
        <Image src="/assets/icons/project.png" alt="project" width={100} height={100} />
        <h2>My Project</h2>
        <Image src="/assets/icons/reverseProject.png" alt="reverseProject" width={100} height={100} />
      </div>
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default MyProject;

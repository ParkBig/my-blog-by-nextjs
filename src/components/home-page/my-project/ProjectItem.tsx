import { ProjectContent } from "@/type/interface";
import Image from "next/image";
import Link from "next/link";
import style from "./projectItem.module.css";

const ProjectItem = ({ project }: { project: ProjectContent }) => {
  const imagePath = project.image[0];
  const lingPath = `/project/${project.title}`;

  return (
    <li className={style.post}>
      <Link href={lingPath}>
        <div className={style.image}>
          <Image
            src={imagePath}
            alt={project.title}
            width={300}
            height={200}
            priority
          />
        </div>
        <div className={style.content}>
          <h3>{project.title}</h3>
          <div>{project.subTitle}</div>
          <p>{project.subContent}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;

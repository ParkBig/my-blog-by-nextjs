import { ProjectContent } from "@/type/interface";
import style from "./briefGrid.module.css";

const BriefGrid = ({ project }: { project: ProjectContent }) => {
  return (
    <ul className={style.upper}>
      <li>
        <div>
          <h4>Main Fun</h4>
          <p>{project.subContent}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Tech</h4>
          <p>{project.stack}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Deploy</h4>
          <p>{project.deployment}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Github</h4>
          <p>{project.github}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Url</h4>
          <p>{project.url}</p>
        </div>
      </li>
    </ul>
  )
}

export default BriefGrid;

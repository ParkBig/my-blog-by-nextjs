import style from "@/components/home-page/my-skills/skillsGrid.module.css";
import { SkillsContent } from "@/type/interface";
import SkillsItem from "./SkillsItem";

const SkillsGrid = ({ skills }: { skills: SkillsContent[] }) => {
  return (
    <ul className={style.grid}>
      {skills.map(skill => <SkillsItem key={skill.category} skill={skill} />)}
    </ul>
  )
}

export default SkillsGrid;

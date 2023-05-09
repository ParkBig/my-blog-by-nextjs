import { SkillsContent } from "@/type/interface";
import Image from "next/image";
import style from "@/components/home-page/my-skills/skillsItem.module.css";

const SkillsItem = ({ skill }: { skill: SkillsContent }) => {
  return (
    <ul className={style.skill}>
      <h3>{skill.category}</h3>
      {skill.data.map(skillImg => 
        <li key={skillImg.skillImage}>
          <Image src={skillImg.skillImage} alt={skillImg.skillImage} width={400} height={300} priority />
        </li> 
      )}
    </ul>
  )
}

export default SkillsItem;

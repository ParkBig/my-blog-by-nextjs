import style from "@/components/home-page/my-skills/mySkills.module.css";
import Image from "next/image";
import SkillsGrid from "./SkillsGrid";
import { SkillsContent } from "@/type/interface";

const MySkills = ({ skills }: { skills: SkillsContent[] }) => {
  return (
    <section className={style.latest} id="skills">
      <div className={style.myProject}>
        <Image src="/assets/icons/chain.png" alt="chain" width={100} height={100} />
        <h2>Skills</h2>
        <Image src="/assets/icons/reverseChain.png" alt="reverseChain" width={100} height={100} />
      </div>
      <SkillsGrid skills={skills} />
    </section>
  )
}

export default MySkills;

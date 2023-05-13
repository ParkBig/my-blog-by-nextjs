import style from "@/components/home-page/me-info/meSummary.module.css";
import AboutMe from "./AboutMe";
import Image from "next/image";

const MeSummary = () => {
  return (
    <section className={style.latest}>
      <div className={style.aboutMe}>
        <Image src="/assets/icons/i.png" alt="me" width={100} height={100} />
        <h2>About Me</h2>
        <Image
          src="/assets/icons/reverseI.png"
          alt="reverseMe"
          width={100}
          height={100}
        />
      </div>
      <AboutMe />
    </section>
  );
};

export default MeSummary;

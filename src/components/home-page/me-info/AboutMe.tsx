import style from "@/components/home-page/me-info/aboutMe.module.css";
import getAboutMe from "@/lib/about-me";
import MeInfo from "./MeInfo";

const AboutMe = () => {
  const meInfo = getAboutMe();

  return (
    <ul className={style.upper}>
      {meInfo.map((info) => (
        <MeInfo key={info.key} info={info} />
      ))}
    </ul>
  );
};

export default AboutMe;

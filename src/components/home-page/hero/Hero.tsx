import style from "@/components/home-page/hero/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image
          src="/assets/site/myPhoto.png"
          alt="An image showing jw"
          height={600}
          width={600}
          priority
        />
      </div>
      <h1>PJW. FrontEnd</h1>
      <p>
        I am a developer who strives not only for individual skills, but for the
        skills of the entire team.
      </p>
    </section>
  );
};

export default Hero;

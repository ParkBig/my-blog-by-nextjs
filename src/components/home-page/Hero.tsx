import style from "@/components/home-page/hero.module.css"
import Image from "next/image";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image src="/assets/site/myPhoto.png" alt="An image showing jw" height={600} width={600}/>
      </div>
      <h1>Hi, I&apos;m jw</h1>
      <p>
        블라블라블라
      </p>
    </section>
  )
}

export default Hero;

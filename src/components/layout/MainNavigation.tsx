import Link from "next/link";
import { Link as ReactScroll } from 'react-scroll';
import Logo from "./Logo";
import style from "@/components/layout/mainNavigation.module.css";

const MainNavigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className={style.header}>
      <a onClick={scrollToTop}>
        <Logo />
      </a>
      <nav>
        <ul>
          <li onClick={scrollToTop}><a>About ME</a></li>
          <li><ReactScroll to="skills" spy={true} smooth={true}>Skills</ReactScroll></li>
          <li><ReactScroll to="myProject" spy={true} smooth={true}>My Project</ReactScroll></li>
          {/* <li><Link href="/project">Project</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;

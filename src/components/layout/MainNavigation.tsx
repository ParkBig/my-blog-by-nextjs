import Link from "next/link";
import { Link as ReactScroll } from 'react-scroll';
import Logo from "./Logo";
import style from "@/components/layout/mainNavigation.module.css";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {router.route !== "/" ?
        <header className={style.header}>
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul>
              <li><Link href="/">Back</Link></li>
            </ul>
          </nav>
        </header>
        :
        <header className={style.header}>
          <a onClick={scrollToTop}>
            <Logo />
          </a>
          <nav>
            <ul>
              <li onClick={scrollToTop}><a>About ME</a></li>
              <li><ReactScroll to="skills" spy={true} smooth={true}>Skills</ReactScroll></li>
              <li><ReactScroll to="myProject" spy={true} smooth={true}>My Project</ReactScroll></li>
            </ul>
          </nav>
        </header>
      }
    </>
  )
}

export default MainNavigation;

import styles from "./HeroStyles.module.css";
import image from "../../assets/FedericoHurtadoPicture.jpeg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun-icon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedInLogo = theme === "light" ? linkedInLight : linkedInDark;
  const githubLogo = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={image}
          alt="Picture of Federico Hurtado"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light mode icon."
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Federico <br /> Hurtado
        </h1>
        <h2> Full Stack Developer </h2>
        <h2> + </h2>
        <h2> Software Engineer </h2>
        <span>
          <a
            href="https://www.linkedin.com/in/federico-hurtado-885495228"
            target="_blank"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/federico-hurtado-swe" target="_blank">
            <img src={githubLogo} alt="Github Logo" />
          </a>
        </span>
        <p className={styles.description}>Write a short bio here. </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

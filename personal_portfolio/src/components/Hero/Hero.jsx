import styles from "./HeroStyles.module.css";
import image from "../../assets/FedericoHurtadoPicture.jpeg";
import lightModeIcon from "../../assets/crescent-moon.svg";
import linkedInLogo from "../../assets/linkedin-logo.svg";
import githubLogo from "../../assets/github-logo.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={image}
          alt="Picture of Federico Hurtado"
        />
        <img
          className={styles.colorModeContainer}
          src={lightModeIcon}
          alt="Light mode icon."
        />
      </div>
      <div className={styles.info}>
        <h1>
          {" "}
          Federico <br /> Hurtado
        </h1>
        <h2> Full Stack Developer </h2>
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
        <p> Write a short bio here. </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

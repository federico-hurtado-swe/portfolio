import React from "react";
import styles from "./ProjectStyles.module.css";
import sampleLogo from "../../assets/sample.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com">
          <img className="hover" src={sampleLogo}></img>
        </a>
      </div>
    </section>
  );
}

export default Projects;

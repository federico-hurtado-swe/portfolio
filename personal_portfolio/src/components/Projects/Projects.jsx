import React from "react";
import styles from "./Project.module.css";
import sampleLogo from "../../assets/sample.jpg";
import githubIcon from "../../assets/github-light.svg";

function Projects() {
  const projectList = [
    {
      title: "GPT Model",
      description:
        "This is a basic Generative Pretrained Transformer model that I created for my Intro To AI final project at Virginia Tech. I completed this project individually, and made use of many online resources in order to learn how to get my first experience with building a real neural network from scratch.  I hope to build off these skills in future work. \n\n The model uses character based encoding to predict the next character in a sequence after using previous characters as context. The number of characters to use as context is an important parameter to set, however it needs to be determined based on CPU quality; I have found a large context length is very computationally expensive. \n\n The output of the model is set to create short snippets of Family Guy scripts, however if given any other text input it should be able to recreate it with generally high accuracy.",
      skills: [
        "Python",
        "Machine Learning",
        "Tokenization",
        "JSON",
        "Neural Network",
      ],
      githubLink: "https://github.com/federico-hurtado-swe/GPTModel/tree/main",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.titleContainer}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <img src={githubIcon} alt="GitHub Repository" />
              </a>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.skillsList}>
              {project.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

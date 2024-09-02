import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Node.js",
    "HTML",
    "CSS",
    "Java",
    "Spring Boot",
    "Machine Learning",
    "Docker",
    "AWS",
    "OCI",
    "TypeScript",
    "SQL",
    "DBMS",
    "C",
    "Linux",
    "Distributed Systems",
    "RESTful API Development",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;

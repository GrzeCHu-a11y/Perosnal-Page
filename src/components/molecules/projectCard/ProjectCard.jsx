import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ src, projectName, description, demolink, gitlink, tech }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={src} alt="" />
      <h2>{projectName}</h2>
      <p>{description}</p>
      <a href={gitlink}></a>
      <a href={demolink}></a>
      <p>{tech}</p>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import styles from "./ProjectCard.module.scss";
import "boxicons";

const ProjectCard = ({ src, projectName, description, demolink, gitlink, tech, id }) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={src} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.h3}>{projectName}</h3>
        <p className={styles.p}>{description}</p>
        <div className={styles.linksContainer}>
          <a href={gitlink} target="blank" className={styles.item}>
            <p>Code</p>
            <box-icon type="logo" name="github" size="md"></box-icon>
          </a>
          <a href={demolink} target="blank" className={styles.item}>
            <p>Live Demo</p>
            <box-icon name="link-external" size="md"></box-icon>
          </a>
        </div>
        <p>{tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

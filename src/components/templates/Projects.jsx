import React from "react";
import styles from "./Projects.module.scss";
import SectionHeader from "../molecules/sectionHeader/SectionHeader";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <SectionHeader h2={"PROJECTS"} p={"Some of Games , Pages and Design projects"} />
    </section>
  );
};

export default Projects;

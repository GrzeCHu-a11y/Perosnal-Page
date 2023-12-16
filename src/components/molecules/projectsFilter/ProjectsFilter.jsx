import React from "react";
import styles from "./ProjectsFilter.module.scss";

const ProjectsFilter = ({ fn }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => fn("all")}>All</button>
      <button onClick={() => fn("game")}>Games</button>
      <button onClick={() => fn("page")}>Pages</button>
      <button onClick={() => fn("design")}>Design</button>
    </div>
  );
};

export default ProjectsFilter;

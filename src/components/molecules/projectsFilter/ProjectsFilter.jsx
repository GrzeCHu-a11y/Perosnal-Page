import React from "react";
import styles from "./ProjectsFilter.module.scss";

const ProjectsFilter = ({ fn, active, loadmore }) => {
  return (
    <div className={styles.container}>
      <button className={active === "all" ? styles.buttonActive : styles.button} onClick={() => fn("all")}>
        All
      </button>
      <button
        className={active === "game" ? styles.buttonActive : styles.button}
        onClick={() => {
          fn("game");
          loadmore();
        }}
      >
        Games
      </button>
      <button className={active === "page" ? styles.buttonActive : styles.button} onClick={() => fn("page")}>
        Pages
      </button>
      <button
        className={active === "design" ? styles.buttonActive : styles.button}
        onClick={() => {
          fn("design");
          loadmore();
          loadmore();
        }}
      >
        Design
      </button>
    </div>
  );
};

export default ProjectsFilter;

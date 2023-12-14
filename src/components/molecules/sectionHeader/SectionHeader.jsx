import React from "react";
import styles from "./SectionHeader.module.scss";

const SectionHeader = ({ h2, p }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2}>{h2}</h2>
      <p className={styles.p}>{p}</p>
    </header>
  );
};

export default SectionHeader;

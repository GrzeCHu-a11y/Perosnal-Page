import React from "react";
import styles from "./FetchDataButton.module.scss";
const FetchDataButton = ({ onClick, text }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default FetchDataButton;

import React, { useState } from "react";
import styles from "./Nav.module.css";
import "boxicons";

const Nav = () => {
  const [isMenuOpen, setMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <a className={styles.logo} href="#">
          G.G Dev
        </a>

        <label htmlFor="" className={styles.icons} onClick={() => setMenu(!isMenuOpen)}>
          {isMenuOpen ? (
            <div id="menuClose" onClick={() => setMenu(!isMenuOpen)}>
              <box-icon color="red" size="lg" name="x"></box-icon>
            </div>
          ) : (
            <div id="menuOpen">
              <box-icon color="red" size="lg" name="menu"></box-icon>
            </div>
          )}
        </label>

        <nav className={isMenuOpen ? `${styles.navbar} ${styles.active}` : styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Nav;

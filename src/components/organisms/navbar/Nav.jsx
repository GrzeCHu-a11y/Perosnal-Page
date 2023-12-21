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
              <box-icon color="black" size="lg" name="x"></box-icon>
            </div>
          ) : (
            <div id="menuOpen">
              <box-icon color="black" size="lg" name="menu"></box-icon>
            </div>
          )}
        </label>

        <nav className={isMenuOpen ? `${styles.navbar} ${styles.active}` : styles.navbar}>
          <a href="#home" className={styles.item} onClick={() => setMenu(!isMenuOpen)}>
            Home
          </a>
          <a href="#projects" className={styles.item} onClick={() => setMenu(!isMenuOpen)}>
            Projects
          </a>
          <a href="#contact" className={styles.item} onClick={() => setMenu(!isMenuOpen)}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Nav;

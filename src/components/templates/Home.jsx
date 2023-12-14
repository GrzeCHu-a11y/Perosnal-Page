import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.h1}>
        Hi I’m Grzegorz <br /> <span className={styles.specialLetters}>Full Stack Web Developer</span>
      </h1>

      <p className={styles.p}>
        Hi, I’m Grzegorz, a self-taught front-end developer. I like building responsive, user-friendly websites and web apps
      </p>

      <h3 className={styles.h3}>Techstack: </h3>
      <div className={styles.techstackContainer}>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-javascript-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-css-144.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-typescript-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-node-js-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/php.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/next-js.256x256.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-mysql-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-graphql-96.png" alt="" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src="/icons8-wordpress-96.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import SectionHeader from "../molecules/sectionHeader/SectionHeader";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <SectionHeader h2={"CONTACT ME"} p={"Would you like to get in touch? Feel free to message me"} />
      <div className={styles.container}>
        <a className={styles.img} href="https://www.linkedin.com/in/grzegorz-go%C5%84czowski-b3942b272/" target="blank">
          <box-icon type="logo" size="lg" color="#0077B5" name="linkedin-square"></box-icon>
        </a>
        <a className={styles.img} href="https://github.com/GrzeCHu-a11y" target="blank">
          <box-icon type="logo" size="lg" name="github"></box-icon>
        </a>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import styles from "./NotFound.module.scss";
import vatsImage from "../../assets/images/elevate-5sAzXev5-jA-unsplash.jpg";

const NotFound = (props) => {
  const { title, messageOne, messageTwo } = props;
  return (
    <section className={styles.notFound}>
      <div className={styles.imgContainer}>
        <img src={vatsImage} alt="brewery vats" />
      </div>
      <div className={styles.notFoundText}>
        <h2>{title}</h2>
        <h4>{messageOne}</h4>
        <h4>{messageTwo}</h4>
      </div>
    </section>
  );
};

export default NotFound;

import React from "react";
import styles from "./NotFound.module.scss";
import vatsImage from "../../assets/images/elevate-5sAzXev5-jA-unsplash.jpg";
import FeedbackText from "../FeedbackText";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.imgContainer}>
        <img src={vatsImage} alt="brewery vats" />
      </div>
      <FeedbackText
        header="404 not found"
        message="oops! looks like this page is still being brewed"
      />
    </section>
  );
};

export default NotFound;

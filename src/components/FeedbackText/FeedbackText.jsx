import React from "react";
import styles from "./FeedbackText.module.scss";

const FeedbackText = (props) => {
  const { header, message } = props;

  return (
    <div className={styles.notFoundText}>
      <h2>{header}</h2>
      <h4>{message.toUpperCase()}</h4>
    </div>
  );
};

export default FeedbackText;

import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { text } = props;

  return (
    <section className={styles.filterItem}>
      <div>{text}</div>
      <div className={styles.box}></div>
    </section>
  );
};

export default FilterItem;

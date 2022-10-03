import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { label } = props;

  return (
    <section className={styles.filterItem}>
      <label>{label}</label>
      <input className={styles.range} type="range" min="0" step="0.2" />
    </section>
  );
};

export default FilterItem;

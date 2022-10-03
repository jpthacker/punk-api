import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { label, ABV, setABV, updateBeers, searchBeers } = props;

  return (
    <section className={styles.filterItem}>
      <label>{label}</label>
      <input
        className={styles.range}
        type="range"
        min="0"
        max="55"
        step="0.1"
        value={ABV}
        onInput={(e) => {
          setABV(e.target.value);
          updateBeers(searchBeers);
        }}
      />
    </section>
  );
};

export default FilterItem;

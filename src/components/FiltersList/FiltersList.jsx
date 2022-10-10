import React from "react";
import styles from "./FiltersList.module.scss";
import Button from "../Button";

const FiltersList = (props) => {
  const { minABV, maxABV, setMinABV, setMaxABV } = props;

  return (
    <section className={styles.filtersList}>
      <h4>FILTERS</h4>
      <Button />
      <Button />
      <Button />
      <label>Min ABV%</label>
      <input
        className={styles.range}
        type="range"
        min="0"
        max={maxABV}
        step="0.1"
        value={minABV}
        onInput={(e) => {
          setMinABV(e.target.value);
        }}
      />
      <label>Max ABV%</label>
      <input
        className={styles.range}
        type="range"
        min={minABV}
        max="55"
        step="0.1"
        value={maxABV}
        onInput={(e) => {
          setMaxABV(e.target.value);
        }}
      />
    </section>
  );
};

export default FiltersList;

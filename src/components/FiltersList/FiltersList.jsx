import React from "react";
import styles from "./FiltersList.module.scss";

const FiltersList = (props) => {
  const {
    isOpen,
    setIsOpen,
    minABV,
    maxABV,
    setMinABV,
    setMaxABV,
    updateBeers,
    searchBeers,
  } = props;

  return (
    <section className={styles.filtersList}>
      <h4>FILTERS</h4>
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
          updateBeers(searchBeers);
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
          updateBeers(searchBeers);
        }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        Done
      </button>
    </section>
  );
};

export default FiltersList;

import React from "react";
import styles from "./FiltersList.module.scss";
import FilterItem from "../FilterItem";

const FiltersList = () => {
  return (
    <section className={styles.filtersList}>
      <h4>FILTERS</h4>
      <FilterItem text="High ABV (> 6.0%)" />
      <FilterItem text="Classic Range" />
      <FilterItem text="Acidic (ph < 4)" />
    </section>
  );
};

export default FiltersList;

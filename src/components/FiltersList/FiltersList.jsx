import React from "react";
import styles from "./FiltersList.module.scss";
import FilterItem from "../FilterItem";

const FiltersList = () => {
  return (
    <section className={styles.filtersList}>
      <h4>FILTERS</h4>
      <FilterItem label="Min ABV" />
      <FilterItem label="Max ABV" />
    </section>
  );
};

export default FiltersList;

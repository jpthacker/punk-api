import React from "react";
import styles from "./FiltersList.module.scss";
import FilterItem from "../FilterItem";

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
      <FilterItem
        label="Min ABV"
        ABV={minABV}
        setABV={setMinABV}
        updateBeers={updateBeers}
        searchBeers={searchBeers}
      />
      <FilterItem
        label="Max ABV"
        ABV={maxABV}
        setABV={setMaxABV}
        updateBeers={updateBeers}
        searchBeers={searchBeers}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        Search
      </button>
    </section>
  );
};

export default FiltersList;

import React from "react";
import styles from "./FiltersList.module.scss";
import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { setBrewedBefore, minABV, maxABV, setMinABV, setMaxABV } = props;

  return (
    <section className={styles.filtersList}>
      <p>Filters:</p>
      <FilterItem
        text="Classic Range"
        changeState={setBrewedBefore}
        state1="12-2011"
        state2="10-2022"
      />
      <FilterItem text="Low Acidity" />
      <div>
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
      </div>
      <div>
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
      </div>
    </section>
  );
};

export default FiltersList;

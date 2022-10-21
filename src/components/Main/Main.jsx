import React from "react";
import styles from "./Main.module.scss";
import FiltersList from "../FiltersList";
import CardList from "../CardList";
import Banner from "../Banner";

const Main = (props) => {
  const {
    filteredBeers,
    setBrewedBefore,
    setPh,
    setIBU,
    minABV,
    maxABV,
    setMinABV,
    setMaxABV,
  } = props;

  return (
    <>
      <section className={styles.main}>
        <section className={styles.cards}>
          <Banner />
          <FiltersList
            setBrewedBefore={setBrewedBefore}
            setPh={setPh}
            setIBU={setIBU}
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
          />
          <CardList filteredBeers={filteredBeers} />
        </section>
      </section>
    </>
  );
};

export default Main;

import React from "react";
import styles from "./Main.module.scss";
import FiltersList from "../FiltersList";
import CardList from "../CardList";

const Main = (props) => {
  const {
    beers,
    isOpen,
    setBrewedBefore,
    minABV,
    maxABV,
    setMinABV,
    setMaxABV,
  } = props;

  const getOverlay = isOpen ? <div className={styles.overlay}></div> : "";

  return (
    <>
      <section className={styles.main}>
        <section className={styles.cards}>
          <div className={styles.banner}>
            <h2>BEERS</h2>
            <p>
              Search Brewdog's back catalogue of beers and choose your
              favourites.
            </p>
          </div>
          <FiltersList
            setBrewedBefore={setBrewedBefore}
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
          />
          <CardList beers={beers} />
        </section>
        {getOverlay}
      </section>
    </>
  );
};

export default Main;

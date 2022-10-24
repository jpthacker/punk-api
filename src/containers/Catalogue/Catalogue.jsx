import React from "react";
import styles from "./Catalogue.module.scss";
import FiltersList from "../../components/FiltersList";
import CardList from "../../components/CardList";
import Banner from "../../components/Banner";
import FeedbackText from "../../components/FeedbackText";

const Catalogue = (props) => {
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

  const contentJsx = filteredBeers.length ? (
    <CardList filteredBeers={filteredBeers} />
  ) : (
    <FeedbackText
      header="NO BEERS"
      message="try searching for your favourite beer using the search bar above"
    />
  );

  return (
    <>
      <section className={styles.catalogue}>
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
        {contentJsx}
      </section>
    </>
  );
};

export default Catalogue;

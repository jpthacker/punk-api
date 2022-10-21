import React from "react";
import styles from "./Main.module.scss";
import FiltersList from "../../components/FiltersList";
import CardList from "../../components/CardList";
import Banner from "../../components/Banner";
import NotFound from "../../components/NotFound";

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

  const contentJsx = filteredBeers.length ? (
    <CardList filteredBeers={filteredBeers} />
  ) : (
    <NotFound
      header="NO BEERS"
      messageOne="try searching for your favpourite beer using the search bar above"
      messageTwo="or click on the logo above to reset the filters"
    />
  );

  return (
    <>
      <section className={styles.main}>
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

export default Main;

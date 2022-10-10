import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { getBeers } from "./services/beers.service";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [beers, setBeers] = useState([]);
  const [beerName, setBeerName] = useState();
  const [minABV, setMinABV] = useState(0);
  const [maxABV, setMaxABV] = useState(55);

  const searchByName = beerName ? `beer_name=${beerName}` : "";
  const searchByMinABV = `&abv_gt=${minABV}`;
  const searchByMaxABV = `&abv_lt=${maxABV}`;

  const searchBeers = `${searchByName}${searchByMinABV}${searchByMaxABV}`;

  const updateBeers = async (searchParams) => {
    console.log(searchParams);
    const apiBeers = await getBeers(searchParams);
    setBeers(apiBeers);
  };

  useEffect(() => {
    updateBeers(searchBeers);
  }, [beerName, minABV, maxABV]);

  return (
    <>
      <section className={styles.content}>
        <section className={styles.nav}>
          <NavBar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setBeerName={setBeerName}
            updateBeers={updateBeers}
            searchBeers={searchBeers}
          />
        </section>
        <section className={styles.cards}>
          <Main
            beers={beers}
            isOpen={isOpen}
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
          />
        </section>
      </section>
    </>
  );
};

export default App;

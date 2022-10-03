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
  const [maxABV, setMaxABV] = useState(100);

  const searchByName = beerName ? `&beer_name=${beerName}` : "";
  const searchByMinABV = `&abv_gt=${minABV}`;
  const searchByMaxABV = `&abv_lt=${maxABV}`;

  const searchBeers = `${searchByName}${searchByMinABV}${searchByMaxABV}`;

  const updateBeers = async (searchParams) => {
    const apiBeers = await getBeers(searchParams);
    setBeers(apiBeers);
  };

  useEffect(() => {
    updateBeers(searchBeers);
  }, []);

  return (
    <>
      <section className={styles.nav}>
        <NavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setBeerName={setBeerName}
          minABV={minABV}
          maxABV={maxABV}
          setMinABV={setMinABV}
          setMaxABV={setMaxABV}
          updateBeers={updateBeers}
          searchBeers={searchBeers}
        />
      </section>
      <section className={styles.content}>
        <Main beers={beers} isOpen={isOpen} />
      </section>
    </>
  );
};

export default App;

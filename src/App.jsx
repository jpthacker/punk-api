import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { getBeers } from "./services/beers.service";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [beers, setBeers] = useState([]);
  const [beerName, setBeerName] = useState();

  const searchByName = beerName ? `&beer_name=${beerName}` : "";

  const updateBeers = async (searchParams) => {
    const apiBeers = await getBeers(searchParams);
    setBeers(apiBeers);
  };

  useEffect(() => {
    updateBeers(searchByName);
  }, []);

  return (
    <>
      <section className={styles.nav}>
        <NavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setBeerName={setBeerName}
          updateBeers={updateBeers}
          searchByName={searchByName}
        />
      </section>
      <section className={styles.content}>
        <Main beers={beers} isOpen={isOpen} />
      </section>
    </>
  );
};

export default App;

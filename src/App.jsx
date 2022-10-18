import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { getBeers } from "./services/beers.service";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState([]);
  const [beerName, setBeerName] = useState();
  const [brewedBefore, setBrewedBefore] = useState("10-2022");
  const [ph, setPh] = useState(14);
  const [IBU, setIBU] = useState(0);
  const [minABV, setMinABV] = useState(0);
  const [maxABV, setMaxABV] = useState(55);

  const searchByName = beerName ? `beer_name=${beerName}` : "";
  const searchbyBrewDate = `brewed_before=${brewedBefore}`;
  const searchByPh = (beersArr, phValue) => {
    const filteredArr = beersArr.filter((beer) => {
      return beer.ph && beer.ph < phValue;
    });
    return filteredArr;
  };
  const searchByIBU = `&ibu_gt=${IBU}`;
  const searchByMinABV = `&abv_gt=${minABV}`;
  const searchByMaxABV = `&abv_lt=${maxABV}`;

  const filterBeers = `${searchbyBrewDate}${searchByIBU}${searchByMinABV}${searchByMaxABV}`;
  const searchBeers = `${searchByName}`;

  const updateBeers = async (searchParams) => {
    const apiBeers = await getBeers(searchParams);
    setBeers(searchByPh(apiBeers, ph));
  };

  const updateSearch = async (searchParams) => {
    const apiSearch = await getBeers(searchParams);
    setSearch(apiSearch);
  };

  useEffect(() => {
    updateBeers(filterBeers);
  }, [brewedBefore, ph, IBU, minABV, maxABV]);

  useEffect(() => {
    updateSearch(searchBeers);
  }, [beerName]);

  return (
    <>
      <section className={styles.content}>
        <section className={styles.nav}>
          <NavBar
            search={search}
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
            setBrewedBefore={setBrewedBefore}
            setPh={setPh}
            setIBU={setIBU}
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

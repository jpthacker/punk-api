import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Pages from "./Pages";
import { getBeers } from "./services/beers.service";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [brewedBefore, setBrewedBefore] = useState("10-2022");
  const [ph, setPh] = useState(14);
  const [IBU, setIBU] = useState(0);
  const [minABV, setMinABV] = useState(0);
  const [maxABV, setMaxABV] = useState(55);

  const filterbyBrewDate = `brewed_before=${brewedBefore}`;
  const filterByIBU = `&ibu_gt=${IBU}`;
  const filterByMinABV = `&abv_gt=${minABV}`;
  const filterByMaxABV = `&abv_lt=${maxABV}`;
  const filterByPh = (beersArr, phValue) => {
    const filteredArr = beersArr.filter((beer) => {
      return beer.ph && beer.ph < phValue;
    });
    return filteredArr;
  };

  const filters = `${filterbyBrewDate}${filterByIBU}${filterByMinABV}${filterByMaxABV}&per_page=80`;

  const updateFilteredBeers = async (filters) => {
    const apiBeers = await getBeers(filters);
    setFilteredBeers(filterByPh(apiBeers, ph));
  };

  useEffect(() => {
    updateFilteredBeers(filters);
  }, [brewedBefore, ph, IBU, minABV, maxABV]);

  return (
    <Router>
      <section className={styles.content}>
        <section className={styles.nav}>
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
        <section className={styles.cards}>
          <Pages
            filteredBeers={filteredBeers}
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
    </Router>
  );
};

export default App;

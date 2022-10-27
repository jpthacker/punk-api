import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Pages from "./Pages";
import { getBeers } from "./services/beers.service";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [brewedBefore, setBrewedBefore] = useState("10-2022");
  const [ph, setPh] = useState(14);
  const [IBU, setIBU] = useState(0);
  const [minABV, setMinABV] = useState(0);
  const [maxABV, setMaxABV] = useState(55);
  const [headliners, setHeadliners] = useState([]);

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

  const getHeadliners = async (ids) => {
    const headlinerBeers = await getBeers(ids);
    setHeadliners(headlinerBeers);
  };

  useEffect(() => {
    updateFilteredBeers(filters);
  }, [brewedBefore, ph, IBU, minABV, maxABV]);

  useEffect(() => {
    getHeadliners("ids=2|42|91|106|132|168");
  }, []);

  return (
    <Router>
      <section className={styles.content}>
        <section className={styles.nav}>
          <NavBar headliners={headliners} />
        </section>
        <section className={styles.main}>
          <Pages
            filteredBeers={filteredBeers}
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

import React, { useEffect, useState } from "react";
import styles from "./SearchList.module.scss";
import SearchItem from "../SearchItem";
import { getBeers } from "../../services/beers.service";

const SearchList = (props) => {
  const { search, beerName } = props;
  const [headliners, setHeadliners] = useState([]);

  const getHeadliners = async (parameters) => {
    const headlinerBeers = await getBeers(parameters);
    setHeadliners(headlinerBeers);
  };

  useEffect(() => {
    getHeadliners("ids=2|42|91|106|132");
  }, []);

  const getBeersJSX = (beer) => (
    <div className={styles.card} key={beer.id}>
      <SearchItem beer={beer} />
    </div>
  );

  const headlinersJSX = (
    <>
      <h4>BREWDOG'S HEADLINERS</h4>
      <section className={styles.searchCards}>
        {headliners.map(getBeersJSX)}
      </section>
    </>
  );

  const searchJSX = (
    <>
      <h4>SEARCH RESULTS</h4>
      <section className={styles.searchCards}>
        {search.map(getBeersJSX)}
      </section>
    </>
  );

  const handleSearch = beerName && search.length ? searchJSX : headlinersJSX;

  const handleNotFound =
    beerName && !search.length ? (
      <>
        <h4>SEARCH RESULTS</h4>
        <h2>SORRY</h2>
        <p>{`No search results for "${beerName}"`}</p>
      </>
    ) : (
      ""
    );

  return (
    <section className={styles.filtersList}>
      <section className={styles.searchCards}>
        {handleNotFound}
        {handleSearch}
      </section>
    </section>
  );
};

export default SearchList;

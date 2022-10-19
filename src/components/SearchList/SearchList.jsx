import React, { useEffect, useState } from "react";
import styles from "./SearchList.module.scss";
import SearchItem from "../SearchItem";
import { getBeers } from "../../services/beers.service";

const SearchList = (props) => {
  const { searchedBeers, beerName } = props;
  const [headliners, setHeadliners] = useState([]);

  const getHeadliners = async (ids) => {
    const headlinerBeers = await getBeers(ids);
    setHeadliners(headlinerBeers);
  };

  useEffect(() => {
    getHeadliners("ids=2|42|91|106|132|168");
  }, []);

  const getBeersJSX = (beer) => <SearchItem beer={beer} key={beer.id} />;

  const headlinersJSX = (
    <section className={styles.searchCards}>
      <h4 className={styles.cardsHeader}>BREWDOG CURRENTS AND CLASSICS</h4>
      {headliners.map(getBeersJSX)}
    </section>
  );

  const searchJSX = (
    <section className={styles.searchCards}>
      <h4 className={styles.cardsHeader}>SEARCH RESULTS</h4>
      {searchedBeers.map(getBeersJSX)}
    </section>
  );

  const handleSearch =
    beerName && searchedBeers.length ? searchJSX : headlinersJSX;

  const handleNotFound =
    beerName && !searchedBeers.length ? (
      <div className={styles.notFound}>
        <h4>SEARCH RESULTS</h4>
        <h2>SORRY</h2>
        <p>{`No search results for "${beerName}"`}</p>
      </div>
    ) : (
      ""
    );

  return (
    <section className={styles.searchList}>
      {handleNotFound}
      {handleSearch}
    </section>
  );
};

export default SearchList;

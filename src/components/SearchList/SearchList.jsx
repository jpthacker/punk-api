import React from "react";
import styles from "./SearchList.module.scss";
import SearchItem from "../SearchItem";

const SearchList = (props) => {
  const getBeersJSX = (beer) => (
    <div className={styles.card} key={beer.id}>
      <SearchItem beer={beer} />
    </div>
  );

  return (
    <section className={styles.filtersList}>
      <h4>SEARCH RESULTS</h4>
      <section className={styles.searchCards}>
        {props.search.map(getBeersJSX)}
      </section>
    </section>
  );
};

export default SearchList;

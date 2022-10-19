import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const { filteredBeers } = props;

  const getBeersJSX = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );

  return (
    <section className={styles.cards}>{filteredBeers.map(getBeersJSX)}</section>
  );
};

export default CardList;

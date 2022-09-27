import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = () => {
  return (
    <>
      <section className={styles.cards}>
        <Card />
      </section>
    </>
  );
};

export default CardList;

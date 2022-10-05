import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";

const Main = (props) => {
  const { beers, isOpen } = props;

  const getOverlay = isOpen ? <div className={styles.overlay}></div> : "";

  return (
    <>
      <section className={styles.main}>
        <section className={styles.cards}>
          <CardList beers={beers} />
        </section>
        {getOverlay}
      </section>
    </>
  );
};

export default Main;

import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";

const Main = (props) => {
  const { beers, isOpen, setIsOpen } = props;

  const getOverlay = isOpen ? <div className={styles.overlay}></div> : "";

  return (
    <>
      <section className={styles.main}>
        {getOverlay}
        <CardList beers={beers} />
      </section>
    </>
  );
};

export default Main;

// onClick={setIsOpen(!isOpen)}

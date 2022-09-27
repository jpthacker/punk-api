import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";

const Main = () => {
  return (
    <>
      <section className={styles.main}>
        <CardList />
      </section>
    </>
  );
};

export default Main;

import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

const App = () => {
  const beersData = beers;

  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        <Main beers={beersData} />
      </section>
    </>
  );
};

export default App;

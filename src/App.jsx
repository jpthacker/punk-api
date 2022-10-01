import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import beers from "./data/beers";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const beersData = beers;

  return (
    <>
      <section className={styles.nav}>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
      <section className={styles.content}>
        <Main beers={beersData} isOpen={isOpen} />
      </section>
    </>
  );
};

export default App;

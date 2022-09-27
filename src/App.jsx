import React from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        <Main />
      </section>
    </>
  );
};

export default App;

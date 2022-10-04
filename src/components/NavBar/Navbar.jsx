import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";

const Navbar = (props) => {
  const {
    isOpen,
    setIsOpen,
    setBeerName,
    minABV,
    maxABV,
    setMinABV,
    setMaxABV,
    updateBeers,
    searchBeers,
  } = props;

  return (
    <>
      <nav className={styles.navFlex}>
        <h3>BREWDOG</h3>
        <div className={styles.searchBox}>
          <SearchBox
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setBeerName={setBeerName}
            updateBeers={updateBeers}
            searchByName={searchBeers}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

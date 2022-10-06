import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import logo from "../../assets/images/brewdog-logo.jpeg";

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
      <nav>
        <div className={styles.navFlex}>
          <h3>BREWDOG</h3>
          <img src={logo} alt="brewdog logo" />
          <div className={styles.searchBox}>
            <SearchBox
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setBeerName={setBeerName}
              minABV={minABV}
              maxABV={maxABV}
              setMinABV={setMinABV}
              setMaxABV={setMaxABV}
              updateBeers={updateBeers}
              searchByName={searchBeers}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

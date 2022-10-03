import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

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

  // const getFiltersList = isOpen ? (
  //   <div className={styles.filters}>
  //     <FiltersList />
  //   </div>
  // ) : (
  //   ""
  // );
  return (
    <>
      <nav className={styles.navFlex}>
        <h3>BREWDOG</h3>
        <div className={styles.searchBox}>
          <SearchBox
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setBeerName={setBeerName}
            updateBeers={updateBeers}
            searchByName={searchBeers}
          />
        </div>
        {/* {getFiltersList} */}
        <div className={styles.filters}>
          <FiltersList
            minABV={minABV}
            maxABV={maxABV}
            setMinABV={setMinABV}
            setMaxABV={setMaxABV}
            updateBeers={updateBeers}
            searchBeers={searchBeers}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

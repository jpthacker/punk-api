import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navFlex}>
        <h3>BREWDOG</h3>
        <SearchBox />
        <div className={styles.filters}>
          <FiltersList />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

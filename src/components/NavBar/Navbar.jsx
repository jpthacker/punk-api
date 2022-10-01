import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";

const Navbar = (props) => {
  const { isOpen, setIsOpen } = props;

  const getFiltersList = isOpen ? (
    <div className={styles.filters}>
      <FiltersList />
    </div>
  ) : (
    ""
  );
  return (
    <>
      <nav className={styles.navFlex}>
        <h3>BREWDOG</h3>
        <div className={styles.searchBox}>
          <SearchBox isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {getFiltersList}
      </nav>
    </>
  );
};

export default Navbar;

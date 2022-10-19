import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import logo from "../../assets/images/brewdog-logo.jpeg";

const Navbar = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <nav>
        <div className={styles.navFlex}>
          <h3>BREWDOG</h3>
          <img className={styles.navImg} src={logo} alt="brewdog logo" />
          <div className={styles.searchBox}>
            <SearchBox isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

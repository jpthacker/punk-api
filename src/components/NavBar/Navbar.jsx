import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import logo from "../../assets/images/brewdog-logo.jpeg";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getOverlay = isOpen ? <div className={styles.overlay}></div> : "";

  return (
    <>
      <nav>
        <div className={styles.navFlex}>
          <h3>BREWDOG</h3>
          <img className={styles.navImg} src={logo} alt="brewdog logo" />
          <div className={styles.searchBox}>
            <SearchBox
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              headliners={props.headliners}
            />
          </div>
        </div>
        {getOverlay}
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import logoText from "../../assets/images/brewdog-logo-text.png";
import logoImg from "../../assets/images/brewdog-logo.jpeg";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getOverlay = isOpen ? <div className={styles.overlay}></div> : "";

  return (
    <>
      <nav>
        <div className={styles.navFlex}>
          <Link to="/" className={styles.link1}>
            <img
              className={styles.navLogoText}
              src={logoText}
              alt="brewdog logo"
            />
          </Link>
          <Link to="/" className={styles.link2}>
            <img
              className={styles.navLogoImg}
              src={logoImg}
              alt="brewdog logo"
            />
          </Link>
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

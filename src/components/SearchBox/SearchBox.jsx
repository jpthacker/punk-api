import React from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
  const { isOpen, setIsOpen } = props;
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <div className={styles.search}>
      <span>{searchIcon}</span>
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => {
          setIsOpen(!isOpen);
        }}
        onBlur={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};

export default SearchBox;

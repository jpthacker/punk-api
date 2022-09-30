import React, { useState } from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  const input = isOpen ? (
    <input
      type="text"
      placeholder="Search..."
      className={styles.expanded}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onBlur={() => {
        setIsOpen(!isOpen);
      }}
    />
  ) : (
    <input
      type="text"
      placeholder="Search..."
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
  return (
    <div className={styles.search}>
      <span>{searchIcon}</span>
      {input}
    </div>
  );
};

export default SearchBox;

import React from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchList from "../SearchList";

const SearchBox = (props) => {
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

  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  const getSearchList = isOpen ? (
    <div className={styles.filters}>
      <SearchList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        minABV={minABV}
        maxABV={maxABV}
        setMinABV={setMinABV}
        setMaxABV={setMaxABV}
        updateBeers={updateBeers}
        searchBeers={searchBeers}
      />
    </div>
  ) : (
    ""
  );

  return (
    <div className={styles.search}>
      <span>{searchIcon}</span>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setBeerName(e.target.value);
        }}
        onFocus={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      />
      {getSearchList}
    </div>
  );
};

export default SearchBox;

import React from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FiltersList from "../FiltersList";

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

  const getFiltersList = isOpen ? (
    <div className={styles.filters}>
      <FiltersList
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
          console.log(e.target.value);
          updateBeers(searchBeers);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      />
      {getFiltersList}
    </div>
  );
};

export default SearchBox;

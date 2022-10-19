import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getBeers } from "../../services/beers.service";
import SearchList from "../SearchList";

const SearchBox = (props) => {
  const { isOpen, setIsOpen } = props;

  const [search, setSearch] = useState([]);
  const [beerName, setBeerName] = useState();

  const searchByName = beerName ? `per_page=5&beer_name=${beerName}` : "";

  const updateSearch = async (searchParams) => {
    const apiSearch = await getBeers(searchParams);
    setSearch(apiSearch);
  };

  useEffect(() => {
    updateSearch(searchByName);
  }, [beerName]);

  const getSearchList = isOpen ? (
    <div className={styles.filters}>
      <SearchList search={search} beerName={beerName} />
    </div>
  ) : (
    ""
  );

  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

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
        onBlur={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      />
      {getSearchList}
    </div>
  );
};

export default SearchBox;

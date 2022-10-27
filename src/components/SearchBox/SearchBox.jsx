import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getBeers } from "../../services/beers.service";
import SearchList from "../SearchList";

const SearchBox = (props) => {
  const { isOpen, setIsOpen, headliners } = props;

  const [searchedBeers, setSearchedBeers] = useState([]);
  const [beerName, setBeerName] = useState();

  const searchByName = beerName ? `per_page=5&beer_name=${beerName}` : "";

  const updateSearch = async (searchParams) => {
    const apiSearch = await getBeers(searchParams);
    setSearchedBeers(apiSearch);
  };

  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  useEffect(() => {
    updateSearch(searchByName);
  }, [beerName]);

  const getSearchList = isOpen ? (
    <div className={styles.searchPopUp}>
      <SearchList
        searchedBeers={searchedBeers}
        beerName={beerName}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headliners={headliners}
      />
    </div>
  ) : (
    ""
  );

  const delayBlurEffect = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100);
  };

  return (
    <section className={styles.search}>
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
          delayBlurEffect(e);
        }}
      />
      {getSearchList}
    </section>
  );
};

export default SearchBox;

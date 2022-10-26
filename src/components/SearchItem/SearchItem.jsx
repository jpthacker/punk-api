import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchItem.module.scss";

const SearchItem = (props) => {
  const { id, name, image_url, abv } = props.beer;

  const formatName = (beerName) => {
    const formattedName = name.toUpperCase();
    if (beerName.length > 25) {
      return `${formattedName.substring(0, 25)}…`;
    } else {
      return formattedName;
    }
  };

  return (
    <Link to={`beer/${id}`} className={styles.link}>
      <section className={styles.searchCard}>
        <div className={styles.imgContainer}>
          <img className={styles.searchImg} src={image_url} alt="beer-img" />
        </div>
        <div className={styles.searchText}>
          <h2>{formatName(name)}</h2>
          <h4>{`${abv}% ABV`}</h4>
        </div>
      </section>
    </Link>
  );
};

export default SearchItem;

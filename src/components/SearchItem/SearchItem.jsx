import React from "react";
import styles from "./SearchItem.module.scss";

const SearchItem = (props) => {
  const { image_url, name, abv } = props.beer;

  return (
    <section className={styles.searchCard}>
      <div className={styles.imgContainer}>
        <img className={styles.searchImg} src={image_url} alt="beer-img" />
      </div>
      <div className={styles.searchText}>
        <h2>{name.toUpperCase()}</h2>
        <h4>{`${abv}% ABV`}</h4>
      </div>
    </section>
  );
};

export default SearchItem;

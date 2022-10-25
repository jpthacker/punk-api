import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchItem.module.scss";

const SearchItem = (props) => {
  const { isOpen, setIsOpen, beer } = props;
  const { id, name, image_url, abv } = beer;

  return (
    <Link to={`beer/${id}`}>
      <section className={styles.searchCard}>
        <div className={styles.imgContainer}>
          <img className={styles.searchImg} src={image_url} alt="beer-img" />
        </div>
        <div className={styles.searchText}>
          <h2>{name.toUpperCase()}</h2>
          <h4>{`${abv}% ABV`}</h4>
        </div>
      </section>
    </Link>
  );
};

export default SearchItem;

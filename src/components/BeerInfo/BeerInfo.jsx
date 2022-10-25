import React from "react";
import styles from "./BeerInfo.module.scss";

const BeerInfo = (props) => {
  const { name, tagline, first_brewed, description, image_url, abv, ibu } =
    props.beer;
  return (
    <section className={styles.beerInfo}>
      <div className={styles.beerBanner}>
        <div className={styles.imgContainer}>
          <img src={image_url} alt="beer image" />
        </div>
      </div>
      <div className={styles.beerText}>
        <h2 className={styles.header}>{name}</h2>
        <h4 className={styles.tagline}>{tagline}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.beerFigures}>
          <div className={styles.figure}>{abv}%</div>
          <div className={styles.figure}>{ibu}</div>
          <div className={styles.figure}>{first_brewed}</div>
        </div>
      </div>
    </section>
  );
};

export default BeerInfo;

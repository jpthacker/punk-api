import React from "react";
import styles from "./BeerInfo.module.scss";

const BeerInfo = (props) => {
  const { name, tagline, first_brewed, description, image_url, abv, ibu } =
    props.beer;
  return (
    <section className={styles.beerInfo}>
      <div className={styles.beerBanner}>
        <h4 className={styles.header}>{name}</h4>
        <div className={styles.imgContainer}>
          <img src={image_url} alt="beer image" />
        </div>
      </div>
      <div className={styles.beerText}>
        <h2 className={styles.tagline}>{tagline}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.beerFigures}>
          <div className={styles.figureContainer}>
            <p>ABV</p>
            <h2 className={styles.figure}>{abv}%</h2>
          </div>
          <span></span>
          <div className={styles.figureContainer}>
            <p>IBU</p>
            <h2 className={styles.figure}>{ibu}</h2>
          </div>
          <span></span>
          <div className={styles.figureContainer}>
            <p>First Brewed</p>
            <h2 className={styles.figure}>{first_brewed}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeerInfo;

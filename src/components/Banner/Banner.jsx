import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h2>BEERS</h2>
      <p>
        Search Brewdog's back catalogue of beers and choose your favourites.
      </p>
    </div>
  );
};

export default Banner;

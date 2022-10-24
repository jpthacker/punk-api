import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = (props) => {
  const { image_url, name, tagline, abv, description } = props.beer;
  return (
    <>
      <section className={styles.beerCard}>
        <div className={styles.imgContainer}>
          <img src={image_url} alt="beer-img" />
        </div>
        <h2>{name.toUpperCase()}</h2>
        <h4>{tagline.toUpperCase()}</h4>
        <h4 className={styles.abv}>{abv}% ABV</h4>
        <div className={styles.cardButton}>
          <Button text="More Information" />
        </div>
      </section>
    </>
  );
};

export default Card;

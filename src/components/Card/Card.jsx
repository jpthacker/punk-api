import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = (props) => {
  const { id, image_url, name, tagline, abv } = props.beer;
  return (
    <>
      <section className={styles.beerCard}>
        <Link to={`beer/${id}`} className={styles.link}>
          <div className={styles.imgContainer}>
            <img src={image_url} alt="beer-img" />
          </div>
          <h2>{name.toUpperCase()}</h2>
        </Link>
        <h4>{tagline.toUpperCase()}</h4>
        <h4 className={styles.abv}>{abv}% ABV</h4>
        <div className={styles.cardButton}>
          <Link to={`beer/${id}`}>
            <Button text="More Information" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;

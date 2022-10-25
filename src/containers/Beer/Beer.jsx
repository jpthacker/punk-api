import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeerInfo from "../../components/BeerInfo/BeerInfo";
import styles from "./Beer.module.scss";
import { getBeer } from "../../services/beers.service";

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  const selectBeer = async (id) => {
    const apiSearch = await getBeer(id);
    setBeer(apiSearch);
    console.log(beer);
  };

  useEffect(() => {
    selectBeer(id);
  }, [id]);

  return (
    <section className={styles.beer}>
      <BeerInfo beer={beer} />
    </section>
  );
};

export default Beer;

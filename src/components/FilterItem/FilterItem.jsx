import React from "react";
import styles from "./FilterItem.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FilterItem = (props) => {
  // const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  return (
    <div className={styles.filter}>
      <label>{props.text}</label>
      <input type="checkbox" className={styles.checkBox}></input>
    </div>
  );
};

export default FilterItem;

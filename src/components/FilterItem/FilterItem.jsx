import React, { useState } from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { changeState, state1, state2 } = props;
  const [checked, setChecked] = useState(true);

  const updateAPI = () => (checked ? changeState(state1) : changeState(state2));

  const handleChange = () => {
    setChecked(!checked);
    {
      updateAPI();
    }
  };

  return (
    <div className={styles.filter}>
      <label>{props.text}</label>
      <input
        type="checkbox"
        className={styles.checkBox}
        onClick={() => {
          handleChange();
        }}
      ></input>
    </div>
  );
};

export default FilterItem;

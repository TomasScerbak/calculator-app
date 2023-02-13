import React from "react";

import Button from "./UI/Button";

import classes from "./CalcBody.module.css";
import styles from "./UI/Button.module.css";

const CalcBody = () => {
  return (
    <div className={`${classes.grid} ${classes["grid--4x5"]}`}>
      <Button className={styles.btn}>7</Button>
      <Button className={styles.btn}>8</Button>
      <Button className={styles.btn}>9</Button>
      <Button className={`${styles.btn} ${styles["btn--text"]}`}>DEL</Button>
      <Button className={styles.btn}>4</Button>
      <Button className={styles.btn}>5</Button>
      <Button className={styles.btn}>6</Button>
      <Button className={styles.btn}>+</Button>
      <Button className={styles.btn}>1</Button>
      <Button className={styles.btn}>2</Button>
      <Button className={styles.btn}>3</Button>
      <Button className={styles.btn}>-</Button>
      <Button className={styles.btn}>.</Button>
      <Button className={styles.btn}>0</Button>
      <Button className={styles.btn}>/</Button>
      <Button className={styles.btn}>x</Button>
      <Button
        className={`${styles.btn} ${styles["span-two"]} ${styles["btn--text"]}`}
      >
        Reset
      </Button>
      <Button
        className={`${styles.btn} ${styles["span-two"]} ${styles["btn--text"]}`}
      >
        =
      </Button>
    </div>
  );
};

export default CalcBody;

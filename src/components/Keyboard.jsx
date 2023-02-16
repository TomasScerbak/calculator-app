import Button from "./UI/Button";

import classes from "./Keyboard.module.css";
import styles from "./UI/Button.module.css";

const Keyboard = ({ dispatch }) => {
  return (
    <div className={`${classes.grid} ${classes["grid--4x5"]}`}>
      <Button dispatch={dispatch} digit="7" className={styles.btn} />
      <Button dispatch={dispatch} digit="8" className={styles.btn} />
      <Button dispatch={dispatch} digit="9" className={styles.btn} />
      <Button className={`${styles.btn} ${styles["btn--text"]}`}>DEL</Button>
      <Button dispatch={dispatch} digit="4" className={styles.btn} />
      <Button dispatch={dispatch} digit="5" className={styles.btn} />
      <Button dispatch={dispatch} digit="6" className={styles.btn} />
      <Button dispatch={dispatch} className={styles.btn}>
        +
      </Button>
      <Button dispatch={dispatch} digit="1" className={styles.btn} />
      <Button dispatch={dispatch} digit="2" className={styles.btn} />
      <Button dispatch={dispatch} digit="3" className={styles.btn} />
      <Button dispatch={dispatch} className={styles.btn}>
        -
      </Button>
      <Button dispatch={dispatch} digit="." className={styles.btn} />
      <Button dispatch={dispatch} digit="0" className={styles.btn} />
      <Button dispatch={dispatch} className={styles.btn}>
        /
      </Button>
      <Button dispatch={dispatch} className={styles.btn}>
        x
      </Button>
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

export default Keyboard;

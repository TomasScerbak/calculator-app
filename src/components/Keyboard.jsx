import DigitButton from "./UI/DigitButton";
import OperationButton from "./UI/OperationButton";

import classes from "./Keyboard.module.css";
import styles from "./UI/DigitButton.module.css";

import { ACTIONS } from "../App";

const Keyboard = ({ dispatch }) => {
  return (
    <div className={`${classes.grid} ${classes["grid--4x5"]}`}>
      <DigitButton dispatch={dispatch} digit="7" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="8" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="9" className={styles.btn} />
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
        className={`${styles.btn} ${styles["btn--text"]}`}
      >
        DEL
      </button>
      <DigitButton dispatch={dispatch} digit="4" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="5" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="6" className={styles.btn} />
      <OperationButton
        dispatch={dispatch}
        operation="+"
        className={styles.btn}
      />
      <DigitButton dispatch={dispatch} digit="1" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="2" className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="3" className={styles.btn} />
      <OperationButton
        dispatch={dispatch}
        operation="-"
        className={styles.btn}
      />
      <DigitButton dispatch={dispatch} digit="." className={styles.btn} />
      <DigitButton dispatch={dispatch} digit="0" className={styles.btn} />
      <OperationButton
        dispatch={dispatch}
        operation="/"
        className={styles.btn}
      />
      <OperationButton
        dispatch={dispatch}
        operation="*"
        className={styles.btn}
      />
      <button
        onClick={() => dispatch({ type: ACTIONS.RESET })}
        className={`${styles.btn} ${styles["span-two"]} ${styles["btn--text"]}`}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className={`${styles.btn} ${styles["span-two"]} ${styles["btn--text"]}`}
      >
        =
      </button>
    </div>
  );
};

export default Keyboard;

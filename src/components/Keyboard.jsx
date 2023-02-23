import DigitButton from "./UI/DigitButton";
import OperationButton from "./UI/OperationButton";

import classes from "./Keyboard.module.css";
import styles from "./UI/DigitButton.module.css";

import { ACTIONS } from "../store/reducer";

const Keyboard = ({ dispatch }) => {
  const buttonsUpper = ["7", "8", "9"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={styles.btn}
    />
  ));
  const buttonsMiddle = ["4", "5", "6"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={styles.btn}
    />
  ));
  const buttonsBelow = ["1", "2", "3"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={styles.btn}
    />
  ));

  return (
    <div className={`${classes.grid} ${classes["grid--4x5"]}`}>
      {buttonsUpper}
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
        className={`${styles.btn} ${styles["btn--text"]}`}
      >
        DEL
      </button>
      {buttonsMiddle}
      <OperationButton
        dispatch={dispatch}
        operation="+"
        className={styles.btn}
      />
      {buttonsBelow}
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

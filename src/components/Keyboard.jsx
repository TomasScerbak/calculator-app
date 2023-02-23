import { useContext } from "react";

import ThemeContext from "../store/theme-context";

import DigitButton from "./UI/DigitButton";
import OperationButton from "./UI/OperationButton";

import classes from "./Keyboard.module.css";
import styles from "./UI/DigitButton.module.css";

import { ACTIONS } from "../store/reducer";

const Keyboard = ({ dispatch }) => {
  const { setThemeStyles } = useContext(ThemeContext);

  const buttonsUpper = ["7", "8", "9"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={`${styles.btn} ${setThemeStyles("digit")}`}
    />
  ));
  const buttonsMiddle = ["4", "5", "6"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={`${styles.btn} ${setThemeStyles("digit")}`}
    />
  ));
  const buttonsBelow = ["1", "2", "3"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={`${styles.btn} ${setThemeStyles("digit")}`}
    />
  ));

  return (
    <div
      className={`${classes.grid} ${classes["grid--4x5"]} ${setThemeStyles(
        "backgroundKeyboard"
      )}`}
    >
      {buttonsUpper}
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
        className={`${styles.btn} ${styles["btn--text"]} ${setThemeStyles(
          "resetAndDel"
        )}`}
      >
        DEL
      </button>
      {buttonsMiddle}
      <OperationButton
        dispatch={dispatch}
        operation="+"
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      {buttonsBelow}
      <OperationButton
        dispatch={dispatch}
        operation="-"
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      <DigitButton
        dispatch={dispatch}
        digit="."
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      <DigitButton
        dispatch={dispatch}
        digit="0"
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      <OperationButton
        dispatch={dispatch}
        operation="/"
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      <OperationButton
        dispatch={dispatch}
        operation="*"
        className={`${styles.btn} ${setThemeStyles("digit")}`}
      />
      <button
        onClick={() => dispatch({ type: ACTIONS.RESET })}
        className={`${styles.btn} ${styles["span-two"]} ${
          styles["btn--text"]
        } ${setThemeStyles("resetAndDel")}`}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className={`${styles.btn} ${styles["span-two"]} ${
          styles["btn--text"]
        } ${setThemeStyles("evaluateButton")}`}
      >
        =
      </button>
    </div>
  );
};

export default Keyboard;

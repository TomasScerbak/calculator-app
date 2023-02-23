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
      className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
        "activeDigit"
      )}`}
    />
  ));
  const buttonsMiddle = ["4", "5", "6"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
        "activeDigit"
      )}`}
    />
  ));
  const buttonsBelow = ["1", "2", "3"].map((digit) => (
    <DigitButton
      key={digit}
      dispatch={dispatch}
      digit={digit}
      className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
        "activeDigit"
      )}`}
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
        )} ${setThemeStyles("resetDelActive")}`}
      >
        DEL
      </button>
      {buttonsMiddle}
      <OperationButton
        dispatch={dispatch}
        operation="+"
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      {buttonsBelow}
      <OperationButton
        dispatch={dispatch}
        operation="-"
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      <DigitButton
        dispatch={dispatch}
        digit="."
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      <DigitButton
        dispatch={dispatch}
        digit="0"
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      <OperationButton
        dispatch={dispatch}
        operation="/"
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      <OperationButton
        dispatch={dispatch}
        operation="X"
        className={`${styles.btn} ${setThemeStyles("digit")} ${setThemeStyles(
          "activeDigit"
        )}`}
      />
      <button
        onClick={() => dispatch({ type: ACTIONS.RESET })}
        className={`${styles.btn} ${styles["span-two"]} ${
          styles["btn--text"]
        } ${setThemeStyles("resetAndDel")} ${setThemeStyles("resetDelActive")}`}
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className={`${styles.btn} ${styles["span-two"]} ${
          styles["btn--text"]
        } ${setThemeStyles("evaluateButton")} ${setThemeStyles(
          "evaluateActive"
        )}`}
      >
        =
      </button>
    </div>
  );
};

export default Keyboard;

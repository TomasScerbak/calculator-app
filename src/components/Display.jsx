import { useContext } from "react";

import classes from "./Display.module.css";

import ThemeContext from "../store/theme-context";

const Display = ({ currentOperand, previousOperand, operation }) => {
  const { setThemeStyles } = useContext(ThemeContext);
  return (
    <div className={`${classes.display} ${setThemeStyles("display")}`}>
      <div
        className={`${classes["in-memory"]} ${setThemeStyles(
          "displayNumbers"
        )}`}
      >
        {previousOperand}
        {operation}
      </div>
      <div
        className={`${classes["display-output"]} ${setThemeStyles(
          "displayNumbers"
        )}`}
      >
        {currentOperand}
      </div>
    </div>
  );
};

export default Display;

import React from "react";

import classes from "./Calculator.module.css";

const Calculator = (props) => {
  return <div className={classes.calculator}>{props.children}</div>;
};

export default Calculator;

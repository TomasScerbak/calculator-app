import classes from "./Display.module.css";

const Display = ({ currentOperand, previousOperand, operation }) => {
  return (
    <div className={classes.display}>
      <div className={classes["in-memory"]}>
        {previousOperand}
        {operation}
      </div>
      <div className={classes["display-output"]}>{currentOperand}</div>
    </div>
  );
};

export default Display;

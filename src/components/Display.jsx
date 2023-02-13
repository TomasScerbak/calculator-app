import React from "react";

import classes from "./Display.module.css";

const Display = () => {
  return (
    <div className={classes.display}>
      <div className={classes["display-output"]}>385,365</div>
    </div>
  );
};

export default Display;

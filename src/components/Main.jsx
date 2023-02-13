import React from "react";

import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <section>{props.children}</section>
    </main>
  );
};

export default Main;

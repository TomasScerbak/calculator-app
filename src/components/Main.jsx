import React, { useContext } from "react";

import InputContext from "../store/input-context";

import classes from "./Main.module.css";

const Main = (props) => {
  const context = useContext(InputContext);
  return (
    <main className={classes.main}>
      <section>{props.children}</section>
    </main>
  );
};

export default Main;

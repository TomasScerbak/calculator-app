import React, { useContext } from "react";

import InputContext from "../store/input-context";

import classes from "./Main.module.css";

const Main = (props) => {
  const { inputValue } = useContext(InputContext);
  return (
    <main
      className={`${classes.main} ${
        inputValue === "0"
          ? classes["main-background-one"]
          : inputValue === "1"
          ? classes["main-background-two"]
          : inputValue === "2"
          ? classes["main-background-three"]
          : ""
      }`}
    >
      <section>{props.children}</section>
    </main>
  );
};

export default Main;

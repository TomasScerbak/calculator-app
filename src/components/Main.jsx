import React, { useContext } from "react";

import ThemeContext from "../store/theme-context";

import classes from "./Main.module.css";

const Main = (props) => {
  const { setThemeStyles } = useContext(ThemeContext);
  return (
    <main className={`${classes.main} ${[setThemeStyles("backgroundMain")]}`}>
      <section>{props.children}</section>
    </main>
  );
};

export default Main;

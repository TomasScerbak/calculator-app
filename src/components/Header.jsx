import React, { useContext } from "react";

import InputContext from "../store/input-context";

import classes from "./Header.module.css";

const Header = () => {
  const context = useContext(InputContext);

  const inputChangeHandler = (e) => {
    context.inputValue = e.target.value;
    console.log(context.inputValue);
  };

  return (
    <header className={classes["header-wrapper"]}>
      <h1 className={classes.logo}>calc</h1>
      <div>
        <div className={classes["theme-wrapper"]}>
          <h2 className={classes.theme}>THEME</h2>
          <div className={classes["theme-input"]}>
            <label className={classes["theme-number"]}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </label>
            <input
              onChange={inputChangeHandler}
              id="input"
              type="range"
              min="0"
              max="2"
              defaultValue="1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useContext } from "react";

import ThemeContext from "../store/theme-context";

import classes from "./Header.module.css";

const Header = () => {
  const { setThemeHandler, setThemeStyles } = useContext(ThemeContext);

  return (
    <header className={classes["header-wrapper"]}>
      <h1 className={`${classes.logo} ${setThemeStyles("headerText")}`}>
        calc
      </h1>
      <div>
        <div className={classes["theme-wrapper"]}>
          <h2 className={`${classes.theme} ${setThemeStyles("headerText")}`}>
            THEME
          </h2>
          <div className={classes["theme-input"]}>
            <label className={classes["theme-number"]}>
              <span className={`${setThemeStyles("headerText")}`}>1</span>
              <span className={`${setThemeStyles("headerText")}`}>2</span>
              <span className={`${setThemeStyles("headerText")}`}>3</span>
            </label>
            <input
              onChange={setThemeHandler}
              id="input"
              type="range"
              min="0"
              max="2"
              defaultValue="0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

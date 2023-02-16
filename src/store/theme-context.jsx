import React from "react";

const ThemeContext = React.createContext({
  themeOne: false,
  themeTwo: true,
  themeThree: false,
  inputRef: null,
});

export default ThemeContext;

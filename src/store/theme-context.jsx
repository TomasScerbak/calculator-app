import React, { useState } from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  let [theme, setTheme] = useState("0");

  const setThemeHandler = (event) => {
    setTheme(event.target.value);
  };

  const setThemeStyles = (args) => {
    const styles = {
      themeOne: {
        backgroundMain: "main-background-one",
        headerText: "header-text-one",
        display: "display-color-one",
        displayNumbers: "display-numbers-one",
        backgroundKeyboard: "background-keyboard-one",
        digit: "digit-theme-one",
        resetAndDel: "reset-del-one",
        evaluateButton: "evaluate-button-one",
        activeDigit: "active-digit-one",
        resetDelActive: "active-reset-del-one",
        evaluateActive: "evaluate-active-one",
      },
      themeTwo: {
        backgroundMain: "main-background-two",
        headerText: "header-text-two",
        display: "display-color-two",
        displayNumbers: "display-numbers-two",
        backgroundKeyboard: "background-keyboard-two",
        digit: "digit-theme-two",
        resetAndDel: "reset-del-two",
        evaluateButton: "evaluate-button-two",
        activeDigit: "active-digit-two",
        resetDelActive: "active-reset-del-two",
        evaluateActive: "evaluate-active-two",
      },
      themeThree: {
        backgroundMain: "main-background-three",
        headerText: "header-text-three",
        display: "display-color-three",
        displayNumbers: "display-numbers-three",
        backgroundKeyboard: "background-keyboard-three",
        digit: "digit-theme-three",
        resetAndDel: "reset-del-three",
        evaluateButton: "evaluate-button-three",
        activeDigit: "active-digit-three",
        resetDelActive: "active-reset-del-three",
        evaluateActive: "evaluate-active-three",
      },
    };
    if (theme === "0") return styles.themeOne[args];
    if (theme === "1") return styles.themeTwo[args];
    if (theme === "2") return styles.themeThree[args];
  };

  return (
    <ThemeContext.Provider value={{ setThemeStyles, setThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;

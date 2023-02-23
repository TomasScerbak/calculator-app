import React, { useState } from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  let [theme, setTheme] = useState(1);

  const setThemeHandler = (event) => {
    setTheme(event.target.value);
    console.log((theme = event.target.value));
  };

  const setThemeStyles = (args) => {
    const styles = {
      themeOne: {
        backgroundMain: "main-background-one",
        headerText: "header-text-one",
        inputBackground: "input-background-one",
        displayNumbers: "display-numbers-one",
        backgroundKeyboard: "background-keyboard-one",
        keyboardButtons: "keyboard-buttons-one",
        keyboardOperators: "keyboard-operators-one",
        keyboardResets: "keyboard-resets-one",
        evaluateButton: "evaluate-button-one",
      },
      themeTwo: {
        backgroundMain: "main-background-two",
        headerText: "header-text-two",
        inputBackground: "input-background-two",
        displayNumbers: "display-numbers-two",
        backgroundKeyboard: "background-keyboard-two",
        keyboardButtons: "keyboard-buttons-two",
        keyboardOperators: "keyboard-operators-two",
        keyboardResets: "keyboard-resets-two",
        evaluateButton: "evaluate-button-two",
      },
      themeThree: {
        backgroundMain: "main-background-three",
        headerText: "header-text-three",
        inputBackground: "input-background-three",
        displayNumbers: "display-numbers-three",
        backgroundKeyboard: "background-keyboard-three",
        keyboardButtons: "keyboard-buttons-three",
        keyboardOperators: "keyboard-operators-three",
        keyboardResets: "keyboard-resets-three",
        evaluateButton: "evaluate-button-three",
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

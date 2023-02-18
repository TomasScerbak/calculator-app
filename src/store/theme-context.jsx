import React, { useState } from "react";

const ThemeContext = React.createContext({
  input: null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("themeTwo");

  const setThemeStyles = (args) => {
    const styles = {
      themeOne: {
        backgroundMain: "background-main-one",
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
        backgroundMain: "background-main-two",
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
        backgroundMain: "background-main-three",
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

    if (theme === "themeOne") {
      return styles.themeOne[args];
    }
    if (theme === "themeTwo") {
      return styles.themeTwo[args];
    }
    if (theme === "themeThree") {
      return styles.themeThree[args];
    }
  };

  const toggleThemeHandler = () => {
    if (input === "0") {
      setTheme("themeOne");
    } else if (input === "1") {
      setTheme("themeTwo");
    } else if (input === "2") {
      setTheme("themeThree");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, setThemeStyles, toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

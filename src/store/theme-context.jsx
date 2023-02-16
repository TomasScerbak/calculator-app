import React, { useState } from "react";

const ThemeContext = React.createContext({
  themeOne: false,
  themeTwo: true,
  themeThree: false,
  inputRef: null,
  toogleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [themeOne, setThemeOne] = useState(false);
  const [themeTwo, setThemeTwo] = useState(true);
  const [themeThree, setThemeThree] = useState(false);

  const toggleTheme = () => {
    if (inputRef === "0") {
      setThemeOne(themeOne);
    } else if (inputRef === "1") {
      setThemeTwo(themeTwo);
    } else if (inputRef === "2") {
      setThemeThree(themeThree);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ themeOne, themeTwo, themeThree, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default { ThemeContext, ThemeProvider };

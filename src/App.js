import { useReducer } from "react";

import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Attribution from "./components/Attribution";

import { ThemeProvider } from "./store/theme-context";

import { reducer } from "./store/reducer";

import "./App.css";

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      <ThemeProvider>
        <Main>
          <Calculator>
            <Header />
            <Display
              currentOperand={currentOperand}
              previousOperand={previousOperand}
              operation={operation}
            />
            <Keyboard dispatch={dispatch} />
          </Calculator>
          <Attribution />
        </Main>
      </ThemeProvider>
    </div>
  );
};

export default App;

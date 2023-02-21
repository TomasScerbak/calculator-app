import { useReducer, useState } from "react";
//Components
import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

//Context
import InputContext from "./store/input-context";

import { reducer } from "./store/reducer";

import "./App.css";

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  const [inputValue, setInputValue] = useState(1);

  return (
    <div className="App">
      <InputContext.Provider value={{ inputValue, setInputValue }}>
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
        </Main>
      </InputContext.Provider>
    </div>
  );
};

export default App;

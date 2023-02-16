import { useReducer } from "react";
//Components
import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  RESET: "reset",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand}${payload.digit}`,
      };
    default:
      return state;
  }
};

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
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
    </div>
  );
}

export default App;

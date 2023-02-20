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
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand === undefined) return state;
      return {
        ...state,
        currentOperand: state.currentOperand.slice(
          0,
          state.currentOperand.length - 1
        ),
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === null && state.previousOperand === null)
        return state;

      if (state.currentOperand === null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand === undefined) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.RESET:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.currentOperand === undefined ||
        state.previousOperand === undefined ||
        state.operation === undefined
      )
        return state;

      return {
        ...state,
        currentOperand: evaluate(state),
        operation: undefined,
        previousOperand: undefined,
      };

    default:
      return state;
  }
  function evaluate({ currentOperand, previousOperand, operation }) {
    let current = parseFloat(currentOperand);
    let previous = parseFloat(previousOperand);

    if (isNaN(current) || isNaN(previous)) return "";

    let computation = "";

    switch (operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "/":
        computation = previous / current;
        break;
      default:
        return;
    }
    return computation.toString();
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

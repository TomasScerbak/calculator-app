//Components
import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Display from "./components/Display";
import CalcBody from "./components/CalcBody";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Main>
        <Calculator>
          <Header />
          <Display />
          <CalcBody />
        </Calculator>
      </Main>
    </div>
  );
}

export default App;

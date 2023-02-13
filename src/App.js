//Components
import Main from "./components/Main";
import Calculator from "./components/Calculator";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Main>
        <Calculator>
          <Header />
        </Calculator>
      </Main>
    </div>
  );
}

export default App;

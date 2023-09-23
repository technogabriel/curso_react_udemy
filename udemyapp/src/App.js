import logo from "./logo.svg";
import "./App.css";
import { FirstComponent } from "./components/FirstComponent";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} width={"250"} className="App-logo" alt="logo" />
          <FirstComponent/>
        </header>
      </div>
    </>
  );
}

export default App;

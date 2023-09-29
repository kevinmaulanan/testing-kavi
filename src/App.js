import logo from "./logo.svg";
import "./App.css";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div className="App">
      <MetaTags>
        <meta charset="UTF-8" />
        <meta name="description" content="Zeta and Kavi" />
        <meta
          name="keywords"
          content="Zeta Kavi, Kavi Zeta, Testing Kavi Zeta, Kavi Testing Zeta, Zeta Testing Kavi"
        />
        <meta name="author" content="Kavi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <div class="content"> Some Content </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

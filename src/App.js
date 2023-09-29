import logo from "./logo.svg";
import "./App.css";
import MetaTags from "react-meta-tags";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
const TRACKING_ID = "G-KWZSMHDF23"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send(window.location.pathname);
  }, []);

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

      <header className="App-header">
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}');
            page_path: window.location.pathname,
          `,
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        /> */}
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

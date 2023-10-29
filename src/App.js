import Routers from "./Routers/Routers";
import "./App.css";
import MetaTags from "react-meta-tags";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const TRACKING_ID = "G-KWZSMHDF23"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    console.log("React Page View", window.location.pathname);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: window.location.pathname,
    });
  }, []);

  return (
    <div className="App">
      <MetaTags>
        <meta charset="UTF-8" />
        <meta name="description" content="Vestia Zeta and Kavi" />
        <meta
          name="keywords"
          content="Vestia Zeta Kavi, Kavi Vestia Zeta, Testing Kavi Vestia Zeta, Kavi Testing Vestia Zeta, Vestia Zeta Testing Kavi"
        />
        <meta name="author" content="Kavi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </MetaTags>

      <Routers />
    </div>
  );
}

export default App;

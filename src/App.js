import Routers from "./Routers/Routers";
import "./App.css";
import "./Components/css/index.css";
import "./Components/css/zoom-in.css";
import MetaTags from "react-meta-tags";
import ReactGA from "react-ga4";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <div className="App">
      <MetaTags>
        <meta charSet="UTF-8" />
        <meta name="description" content="Vestia Zeta and Kavi" />
        <meta
          name="keywords"
          content="Vestia Zeta Kavi, Kavi Vestia Zeta, Testing Kavi Vestia Zeta, Kavi Testing Vestia Zeta, Vestia Zeta Testing Kavi"
        />
        <meta name="author" content="Kavi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="google-site-verification"
          content="td_QCbD0cVQS_VJGu6Gw0OOHr_wlznmydYp0JdsPsnY"
        />
      </MetaTags>

      <Routers />
    </div>
  );
}

export default App;

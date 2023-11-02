import ReactGA from "react-ga4";
const TRACKING_ID = "G-KWZSMHDF23"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

export function AddPageViewGA(page, title) {
  console.log("pageview", page, title);
  ReactGA.send({
    hitType: "pageview",
    page,
    title,
  });
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export function AddActionGA(action, category, label) {
  console.log("action", action, category, label);
  ReactGA.event({
    category,
    action,
    label,
  });
}

export function AddEventGA(action, category, label) {
  console.log("event", action, category, label);
  ReactGA.event({
    category,
    action,
    label,
  });
}

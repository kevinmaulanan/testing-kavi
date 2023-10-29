import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

import Layout from "../Components/Layout";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import ContentProduct from "../Components/ContentProduct";
import ContentCostume from "../Components/ContentCostume";

export default function Home() {
  const navigate = useNavigate();

  const redirectPage = (page) => {
    ReactGA.event({
      category: "navbar",
      action: "click",
      label: page,
    });
    navigate(page);
  };
  return (
    <div style={{ marginBottom: 40 }}>
      <Layout redirectPage={redirectPage} />
      <Banner />
      <div style={{ margin: "0px 50px 0px 50px" }}>
        <Content contentTitle="Video Clip" />
        <ContentProduct contentTitle="Product" />
        <ContentCostume contentTitle="Costume" />
        <Content contentTitle="Event" />
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { Container } from "@mui/material";

import Layout from "../Components/Layout";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import ContentProduct from "../Components/ContentProduct";
import ContentCostume from "../Components/ContentCostume";

import {
  ProductData,
  VideoData,
  EventData,
  CostumeData,
} from "../DummyData/index";

export default function Home() {
  const navigate = useNavigate();

  const redirectPage = (page) => {
    ReactGA.event({
      category: "navbar",
      action: "click",
      label: page,
    });
    navigate(page, { replace: true });
  };

  const redirectPageByButton = (name, page) => {
    console.log(name, page);
    ReactGA.event({
      category: name,
      action: "click_see_all_button_from_home_page",
      label: "Click See All Button - " + name,
    });
    navigate(page);
  };
  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Banner />
      <Container>
        <Content
          contentTitle="Video Clip"
          data={VideoData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
        />
        <ContentProduct
          contentTitle="Product"
          data={ProductData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />
        <ContentCostume
          contentTitle="Costume"
          data={CostumeData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/costume"
          labelName="costume"
        />
        <Content
          contentTitle="Event"
          data={EventData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/event"
          labelName="event"
        />
      </Container>
    </div>
  );
}

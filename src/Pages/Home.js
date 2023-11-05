import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";

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
import { useEffect } from "react";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_home_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  return (
    <div style={{ marginBottom: 60 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Box sx={{ marginTop: { xs: "70px", md: "70px" } }} />
      <Banner />
      <Container>
        <Content
          contentTitle="Video Clip"
          data={VideoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
        />
        <ContentProduct
          contentTitle="Product"
          data={ProductData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />
        <ContentCostume
          contentTitle="Costume"
          data={CostumeData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/costume"
          labelName="costume"
        />
      </Container>
    </div>
  );
}

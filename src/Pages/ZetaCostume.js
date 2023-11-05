import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";

import Layout from "../Components/Layout";
import ContentProduct from "../Components/ContentProduct";
import Content from "../Components/Content";

import { VideoData, ProductData, CostumeData } from "../DummyData/index";
import CardCostume from "../Components/CardCostume";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

export default function Costume() {
  const navigate = useNavigate();

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageDetail = (page) => {
    AddActionGA("click", "item_detail", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_costume_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <div style={{ marginTop: 100 }} />
        <Box
          sx={{
            display: {
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
            },
          }}>
          <Typography
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "24px", md: "32px" },
            }}>
            COSTUME
          </Typography>
        </Box>
        <CardCostume
          data={CostumeData}
          redirectPage={redirectPageDetail}
          redirectUrl="/costume"
        />

        <Content
          contentTitle="Lihat Juga Videonya"
          data={VideoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
        />

        <ContentProduct
          contentTitle="Lihat Juga Productnya"
          data={ProductData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />
      </Container>
    </div>
  );
}

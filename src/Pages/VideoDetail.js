import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Typography, Box } from "@mui/material";

import Layout from "../Components/Layout";
import ContentProduct from "../Components/ContentProduct";
import Content from "../Components/Content";

import { VideoData, ProductData } from "../DummyData/index";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

export default function ContentVideoDetailTop(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let findData = _.find(VideoData, { id: parseInt(id) });
    console.log(findData, { id }, "fiind dataxsx");
    setData(findData);
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_video_detail_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  console.log(data.images);
  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <div style={{ marginTop: 100 }} />
        <Typography
          variant="h2"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "black",
            marginBottom: 2,
          }}>
          {data.title}
        </Typography>
        <ImageGallery
          items={data.images || []}
          thumbnailPosition="left"
          showFullscreenButton={true}
        />

        <Box
          sx={{
            marginTop: 5,
            height: 50,
            width: "100%",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              width: 200,
              height: 50,
              color: "white",
              border: "1px solid #063f5c",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "#063f5c",
              color: "white",

              "&:hover": {
                cursor: "pointer",
              },
            }}
            href={data.redirectUrl}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                display: "flex",
                fontFamily: "monospace",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
              }}>
              Visit Video
            </Typography>
          </Box>
        </Box>

        <Content
          contentTitle="Video Yang Berkaitan"
          data={VideoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
        />

        <ContentProduct
          contentTitle="Product Yang Berkaitan"
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

import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import _ from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Container, Typography, Box } from "@mui/material";

import Layout from "../Components/Layout";
import ContentProduct from "../Components/ContentProduct";
import Content from "../Components/Content";

import { VideoData, ProductData, CostumeData } from "../DummyData/index";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

export default function CostumeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let findData = _.find(CostumeData, { id: parseInt(id) });

    let videoDataFilter = VideoData.filter((v) => {
      if (
        Array.isArray(v.tags) &&
        v.tags.includes(`${findData.name} COSTUME`)
      ) {
        return true;
      }
      return false;
    });
    if (videoDataFilter.length < 4) {
    }

    setVideoData(videoDataFilter);
    setData(findData);
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_costume_detail_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page + `?tag=${data.name}_COSTUME`);
  };

  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <div style={{ marginTop: 100 }} />
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "black",
            marginBottom: 2,
            textAlign: "start",
            marginTop: 3,

            fontSize: { xs: "24px", md: "32px" },
          }}>
          COSTUME {data.name}
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ImageGallery
            items={data.images || []}
            thumbnailPosition={"left"}
            showFullscreenButton={true}
          />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <ImageGallery
            items={data.images || []}
            // thumbnailPosition={"left"}
            showFullscreenButton={true}
          />
        </Box>

        <Content
          contentTitle="Video Yang Berkaitan"
          data={videoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl={`/video`}
          labelName={`video`}
          isList={true}
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

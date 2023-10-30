import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ReactGA from "react-ga4";
import { Typography, Box, Container } from "@mui/material";

import Layout from "../Components/Layout";
import CardItem from "../Components/Card";
import TagItem from "../Components/Tag";
import ButtonPagination from "../Components/ButtonPagination";
import ContentProduct from "../Components/ContentProduct";
import ContentCostume from "../Components/ContentCostume";

import {
  VideoData,
  ProductData,
  VideoTagData,
  CostumeData,
} from "../DummyData/index";

export default function Video() {
  const navigate = useNavigate();
  const [tagActiveId, setTagActiveId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHideButton, setIsHideButton] = useState(false);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  const redirectPage = (page) => {
    ReactGA.event({
      category: "navbar",
      action: "click",
      label: page,
    });
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    ReactGA.event({
      category: name,
      action: "click_see_all_button_from_video_page",
      label: "Click See All Button - " + name,
    });
    navigate(page);
  };

  const onClickSetTagActive = (tag) => {
    ReactGA.event({
      category: "video_tag",
      action: "click",
      label: tag.name,
    });
    setTagActiveId(tag.id);
  };

  const loadItem = () => {
    ReactGA.event({
      category: "button_load_video",
      action: "click",
      label: "Button Load Video - Page " + page,
    });
    setIsLoading(true);
    setTimeout(function () {
      setPage(page + 1);
      setData(VideoData.slice(0, limit * (page + 1)));
      if (VideoData.length == VideoData.slice(0, limit * (page + 1)).length) {
        setIsHideButton(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setData(VideoData.slice(0, limit));
  }, []);

  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <Box
          sx={{
            display: {
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 40,
            },
          }}>
          <Typography
            variant="h1"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
            }}>
            VIDEO CLIP
          </Typography>
        </Box>
        <TagItem
          data={VideoTagData}
          tagActiveId={tagActiveId}
          onClickSetTagActive={onClickSetTagActive}
        />
        <CardItem data={data} />
        {isHideButton == false && (
          <ButtonPagination isLoading={isLoading} loadItem={loadItem} />
        )}

        <ContentProduct
          contentTitle="Lihat Juga Productnya"
          data={ProductData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />

        <ContentCostume
          contentTitle="Lihat Juga Costumenya"
          data={CostumeData.slice(0, 4)}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/costume"
          labelName="costume"
        />
      </Container>
    </div>
  );
}

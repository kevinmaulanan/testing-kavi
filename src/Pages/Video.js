import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { AddPageViewGA, AddActionGA, AddEventGA } from "../Services/GA";

export default function Video() {
  const navigate = useNavigate();
  const [tagActiveId, setTagActiveId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHideButton, setIsHideButton] = useState(false);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_video_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  const onClickSetTagActive = (tag) => {
    AddEventGA("click", "video_tag", tag.name);
    setTagActiveId(tag.id);
  };

  const loadItem = () => {
    AddEventGA(
      "click",
      "button_load_video",
      "Button Load Video - Page " + page
    );

    setIsLoading(true);
    setTimeout(function () {
      setPage(page + 1);
      setData(VideoData.slice(0, limit * (page + 1)));
      if (VideoData.length === VideoData.slice(0, limit * (page + 1)).length) {
        setIsHideButton(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    setData(VideoData.slice(0, limit));
  }, []);

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
          redirectPage={redirectPage}
          onClickSetTagActive={onClickSetTagActive}
        />
        <CardItem
          data={data}
          redirectPage={redirectPage}
          redirectUrl="/video"
        />
        {isHideButton === false && (
          <ButtonPagination isLoading={isLoading} loadItem={loadItem} />
        )}

        <ContentProduct
          contentTitle="Lihat Juga Productnya"
          data={ProductData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />

        <ContentCostume
          contentTitle="Lihat Juga Costumenya"
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

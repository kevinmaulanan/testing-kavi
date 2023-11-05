import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Typography, Box, Link, Container } from "@mui/material";

import Layout from "../Components/Layout";
import CardProductItem from "../Components/CardProduct";
import TagItem from "../Components/Tag";
import ButtonPagination from "../Components/ButtonPagination";
import Content from "../Components/Content";
import ContentCostume from "../Components/ContentCostume";

import {
  ProductData,
  VideoData,
  ProductTagData,
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

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    setData(ProductData.slice(0, limit));
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_product_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  const onClickSetTagActive = (tag) => {
    AddEventGA("click", "product_tag", tag.name);
    setTagActiveId(tag.id);
  };

  const loadItem = () => {
    AddEventGA(
      "click",
      "button_load_product",
      "Button Load Product - Page " + page
    );
    setIsLoading(true);
    setTimeout(function () {
      setPage(page + 1);
      setData(ProductData.slice(0, limit * (page + 1)));
      if (
        ProductData.length === ProductData.slice(0, limit * (page + 1)).length
      ) {
        setIsHideButton(true);
      }
      setIsLoading(false);
    }, 1000);
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
              marginBottom: { xs: 0, md: 20 },
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
            PRODUCT
          </Typography>
        </Box>

        <TagItem
          data={ProductTagData}
          tagActiveId={tagActiveId}
          onClickSetTagActive={onClickSetTagActive}
        />

        <CardProductItem data={data} />
        {isHideButton === false && (
          <ButtonPagination isLoading={isLoading} loadItem={loadItem} />
        )}

        <Content
          contentTitle="Lihat Juga Videonya"
          data={VideoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
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

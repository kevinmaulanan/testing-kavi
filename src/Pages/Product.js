import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Typography,
  Box,
  Link,
  Container,
  Backdrop,
  CircularProgress,
} from "@mui/material";

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
  const [searchParams] = useSearchParams();
  const [tagActiveId, setTagActiveId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [isHideButton, setIsHideButton] = useState(false);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [tagName, setTagName] = useState("ALL");

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let tag = searchParams.get("tag");
    console.log(tag, "tag");
    if (tag) {
      let findTag = ProductTagData.find(
        (v) => v.name === tag.split("_").join(" ") || v.name === tag
      );

      console.log(findTag, "findTag");
      if (findTag) {
        setTagActiveId(findTag.id);
        setTagName(findTag.name);
        return;
      }
    }
    return setData(ProductData.slice(0, limit));
  }, []);

  useEffect(() => {
    setData(getFilterData());
    setIsLoading(false);
    setIsLoadingContent(false);
  }, [tagName, page]);

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
      "click_see_all_button_from_product_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  const getFilterData = () => {
    let filterData = ProductData;
    if (tagName != "ALL") {
      filterData = ProductData.filter((v) => {
        if (Array.isArray(v.tags)) {
          if (v.tags.includes(tagName)) {
            return true;
          }
        }
        return false;
      });
    }

    if (filterData.length === filterData.slice(0, limit * page).length) {
      setIsHideButton(true);
    } else {
      setIsHideButton(false);
    }

    filterData = filterData.slice(0, limit * page);
    return filterData;
  };

  const onClickSetTagActive = (tag) => {
    AddEventGA("click", "product_tag", tag.name);

    setIsLoadingContent(true);
    setTimeout(function () {
      setPage(1);
      setTagName(tag.name);
    }, 1000);

    setTagActiveId(tag.id);
  };

  const loadItem = () => {
    AddEventGA(
      "click",
      "button_load_product",
      "Button Load Product - Page " + page + 1
    );

    setIsLoading(true);
    setTimeout(function () {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div style={{ marginBottom: 40 }} className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoadingContent}>
          <CircularProgress color="inherit" />
        </Backdrop>
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

        <CardProductItem
          data={data}
          redirectPage={redirectPageDetail}
          redirectUrl="/product"
        />
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

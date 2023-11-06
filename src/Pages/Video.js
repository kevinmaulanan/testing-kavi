import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";

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
  const [searchParams] = useSearchParams();
  const [tagActiveId, setTagActiveId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [isHideButton, setIsHideButton] = useState(false);
  const [limit, setLimit] = useState(12);
  const [tagName, setTagName] = useState("ALL");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let tag = searchParams.get("tag");
    if (tag) {
      let findTag = VideoTagData.find(
        (v) => v.name === tag.split("_").join(" ") || v.name === tag
      );
      if (findTag) {
        setTagActiveId(findTag.id);
        setTagName(findTag.name);
        return;
      }
    }
    return setData(VideoData.slice(0, limit));
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
      "click_see_all_button_from_video_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  const getFilterData = () => {
    let filterData = VideoData;
    if (tagName != "ALL") {
      filterData = VideoData.filter((v) => {
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
    AddEventGA("click", "video_tag", tag.name);

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
      "button_load_video",
      "Button Load Video - Page " + page + 1
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
            variant="h1"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "24px", md: "32px" },
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
          redirectPage={redirectPageDetail}
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

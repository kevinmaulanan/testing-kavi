import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import _ from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Container, Typography, Box } from "@mui/material";

import Layout from "../Components/Layout";
import ContentProduct from "../Components/ContentProduct";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

import { VideoData, ProductData } from "../DummyData/index";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

import "../Components/css/image-galery.css";

export default function ProductDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [productData, setProductData] = useState([]);

  const setProductRecommendation = (findData) => {
    let productDataFilter = ProductData.filter((v) => {
      if (v.id == findData.id) return false;

      if (Array.isArray(v.tags) && Array.isArray(findData.tags)) {
        for (let i = 0; i < v.tags.length; i++) {
          if (findData.tags.includes(v.tags[i])) {
            return true;
          }
        }
      }
      return false;
    });

    if (productDataFilter.length == 0) {
      productDataFilter = ProductData.slice(0, 6);
    }

    setProductData(productDataFilter);
  };

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let findData = _.find(ProductData, { id: parseInt(id) });
    setData(findData);
    setProductRecommendation(findData);
  }, []);

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
    let findData = _.find(ProductData, { id: parseInt(id) });
    setData(findData);
    setProductRecommendation(findData);
  }, [id]);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageFooter = (page) => {
    AddActionGA("click", "footer", page);
    navigate(page);
  };

  const redirectPageByButton = (name, page) => {
    AddActionGA(
      "click_see_all_button_from_product_detail_page",
      "Click See All Button - " + name,
      page
    );
    navigate(page);
  };

  return (
    <div className="background-image-all">
      <Layout redirectPage={redirectPage} />
      <Container>
        <div style={{ marginTop: 100 }} />
        <Typography
          // variant="h4"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "black",
            marginBottom: 2,
            textAlign: "start",
            marginTop: 3,
            fontSize: { xs: "12px", md: "20px" },
          }}>
          {data.title || data.name}
        </Typography>

        <ImageGallery
          items={data.images || []}
          // thumbnailPosition="left"
          showFullscreenButton={true}
          additionalClass="image-galery-test"
        />

        <Box
          sx={{
            marginTop: { xs: 1, md: 5 },
            height: 50,
            width: "100%",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Link
            to={data.redirectUrl}
            style={{ textDecoration: "none" }}
            target="_blank">
            <Box
              sx={{
                width: { xs: "110px", md: "200px" },
                height: { xs: "40px", md: "60px" },
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
              }}>
              <Typography
                // variant="h4"
                noWrap
                component="a"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: { xs: "12px", md: "20px" },
                }}>
                Visit Product
              </Typography>
            </Box>
          </Link>
        </Box>

        <ContentProduct
          contentTitle="Product Yang Berkaitan"
          data={productData.slice(0, 6)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/product"
          labelName="product"
        />

        <Content
          contentTitle="Video Yang Berkaitan"
          data={VideoData.slice(0, 4)}
          redirectPage={redirectPage}
          redirectPageByButton={redirectPageByButton}
          redirectUrl="/video"
          labelName="video"
        />
      </Container>

      <Box style={{ marginBottom: 60 }}></Box>
      <Footer redirectPage={redirectPageFooter} />
    </div>
  );
}

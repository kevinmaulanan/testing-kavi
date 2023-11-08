import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import _ from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Container, Typography, Box } from "@mui/material";

import Layout from "../Components/Layout";
import Footer from "../Components/Footer";
import { AddPageViewGA, AddActionGA } from "../Services/GA";

import "../Components/css/image-galery.css";

export default function ProductDetail(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let pathname = window.location.pathname;
    AddPageViewGA(pathname, pathname);
  }, []);

  const redirectPage = (page) => {
    AddActionGA("click", "navbar", page);
    navigate(page);
  };

  const redirectPageFooter = (page) => {
    AddActionGA("click", "footer", page);
    navigate(page);
  };

  return (
    <div className="background-image-all">
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
            About
          </Typography>
        </Box>

        <Box
          component={"img"}
          alt={"About Zeta"}
          width={"100%"}
          height={"100%"}
          src={
            "https://api.duniagames.co.id/api/content/upload/file/19825092321671378189.jpg"
          }
        />

        <Box
          sx={{
            display: {
              display: "flex",
              justifyContent: "center",
              marginBottom: { xs: 0, md: 20 },
            },
          }}>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              fontSize: { xs: "14px", md: "32px" },
            }}>
            Website untuk mempromosikan Vtuber Vestia Zeta dari Hololive ID Gen
            3 (Tugas Kuliah)
          </Typography>
        </Box>
      </Container>

      <Box style={{ marginBottom: 60 }}></Box>
      <Footer redirectPage={redirectPageFooter} />
    </div>
  );
}

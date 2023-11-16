import * as React from "react";

// import AspectRatio from "@mui/material/AspectRatio";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";

const pages = [
  { name: "Home", tag: "/" },
  { name: "Video", tag: "/video" },
  { name: "Product", tag: "/product" },
  { name: "Costume", tag: "/costume" },
  { name: "About", tag: "/about" },
];

const sosmed = [
  { name: "Instagram", redirectUrl: "https://www.instagram.com/vestiazeta/" },
  {
    name: "Youtube",
    redirectUrl: "https://www.youtube.com/channel/UCTvHWSfBZgtxE4sILOaurIQ",
  },
  { name: "Tiktok", redirectUrl: "https://www.tiktok.com/@vestiazeta" },
];

export default function Footer(props) {
  const [color, setColor] = React.useState("neutral");
  return (
    <Box
      sx={{
        background:
          "linear-gradient(119deg, rgba(65,198,219,1) 0%, rgba(36,174,223,1) 37%, rgba(75,157,236,1) 100%)",
        height: { md: "400px", xs: "300px" },
      }}>
      <Container>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 1, md: 2 }}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={4} md={4} key={1}>
            <Box sx={{ display: "flex" }}>
              <Box
                component={"img"}
                alt={`${process.env.REACT_APP_WEB_URL}/image/logo-vestia-zeta.png`}
                sx={{
                  width: { xs: "100px", md: "300px" },
                  height: { xs: "150px", md: "250px" },
                }}
                src={`${process.env.REACT_APP_WEB_URL}/image/logo-vestia-zeta.png`}></Box>
            </Box>
          </Grid>

          <Grid item xs={4} md={4} key={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginTop: 10,
              }}>
              <Box
                key={"sosmed"}
                sx={{
                  color: "white",
                  fontSize: { sx: 20, md: 20 },
                  fontFamily: "monospace",
                }}>
                Pages
              </Box>
              {pages &&
                pages.map((page) => (
                  <Box
                    key={page.name}
                    onClick={() => props.redirectPage(page.tag)}
                    sx={{
                      color: "white",
                      display: "block",
                      fontWeight: "bold",
                      fontSize: { sx: 20, md: 20 },
                      fontFamily: "monospace",
                      transition: "0.2s",
                      marginTop: 3,
                      "&:hover": {
                        opacity: ".5",
                        cursor: "pointer",
                      },
                    }}>
                    {page.name}
                  </Box>
                ))}
            </Box>
          </Grid>

          <Grid item xs={4} md={4} key={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                marginTop: 10,
              }}>
              <Box
                key={"sosmed"}
                sx={{
                  color: "white",
                  fontSize: { sx: 20, md: 20 },
                  fontFamily: "monospace",
                }}>
                Sosmed
              </Box>
              {sosmed &&
                sosmed.map((s) => (
                  <Box
                    href={s.redirectUrl}
                    target="_blank"
                    component={"a"}
                    key={s.name}
                    sx={{
                      color: "white",
                      display: "block",
                      fontWeight: "bold",
                      fontSize: { sx: 20, md: 20 },
                      fontFamily: "monospace",
                      transition: "0.2s",
                      marginTop: 3,
                      textDecoration: "none",
                      "&:hover": {
                        opacity: ".5",
                        cursor: "pointer",
                      },
                    }}>
                    {s.name}
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

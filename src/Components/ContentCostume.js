import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, Box, Link } from "@mui/material";

import "./css/index.css";

const costumes = [
  {
    name: "DEFAULT",
    description: "Costume pertama ketika debut",
    image: `${process.env.REACT_APP_WEB_URL}/costume/vestia-zeta-costume-default.png`,
  },
  {
    name: "KIMONO",
    description: "Costume kedua yaitu kimono",
    image: `${process.env.REACT_APP_WEB_URL}/costume/vestia-zeta-costume-kimono.png`,
  },
  {
    name: "GELORA",
    description: "Costume ketiga yaitu gelora",
    image: `${process.env.REACT_APP_WEB_URL}/costume/vestia-zeta-costume-gelora.png`,
  },
];
export default function ContentCostume(props) {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Box sx={{ display: "flex" }} mb={3}>
        <Box
          width={"40%"}
          sx={{
            display: { display: "flex", justifyContent: "flex-start" },
          }}>
          <Typography
            variant="h4"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
            }}>
            {props.contentTitle}
          </Typography>
        </Box>
        <Box
          width={"60%"}
          sx={{
            display: { display: "flex", justifyContent: "flex-end" },
          }}>
          <Link underline="none" href="product">
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: "bold",
                color: "#808080",
              }}>
              Lihat Semua
            </Typography>
          </Link>
        </Box>
      </Box>

      <Grid container rowSpacing={2}>
        {costumes &&
          costumes.map((costume) => (
            <Grid item xs={12}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 450, height: 250, objectPosition: "70% 5%" }}
                  image={costume.image}
                  alt="Live from space album cover"
                />
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "-200px",
                  }}>
                  <Typography
                    component="div"
                    variant="h4"
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 700,
                      color: "black",
                    }}>
                    {costume.name}
                  </Typography>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      fontFamily: "monospace",
                      color: "black",
                    }}>
                    {costume.description}
                  </Typography>
                </CardContent>

                <Button variant="contained" sx={{ backgroundColor: "#27C7FF" }}>
                  VIEW MORE
                </Button>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

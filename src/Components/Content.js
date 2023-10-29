import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Box,
  Link,
} from "@mui/material";

import "./css/index.css";

const data = [0, 1, 2, 2];
export default function Content(props) {
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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        {data &&
          data.map((data) => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.REACT_APP_WEB_URL}/banner/zeta-banner-1.png`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      align="justify"
                      className="content-body-text">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

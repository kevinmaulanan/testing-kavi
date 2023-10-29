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

const data = [0, 1, 2, 2, 1, 1, 1, 1];
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

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        {data &&
          data.map((data) => (
            <Grid item xs={3}>
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 100 }}
                    image={`${process.env.REACT_APP_WEB_URL}/banner/zeta-banner-1.png`}
                    alt="Live from space album cover"
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "black",
                      }}>
                      CARD
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div">
                      20 pcs
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

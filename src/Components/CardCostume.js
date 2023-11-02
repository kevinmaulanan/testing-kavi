import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, Box } from "@mui/material";

export default function CardCostume(props) {
  return (
    <Grid container rowSpacing={2}>
      {props.data &&
        props.data.map((costume) => (
          <Grid item xs={12} key={costume.id}>
            <Card variant="outlined" sx={{ display: "flex" }}>
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
  );
}

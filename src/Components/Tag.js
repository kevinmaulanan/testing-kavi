import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Box } from "@mui/material";

export default function Tag(props) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 1, md: 1 }}
      sx={{ marginBottom: "30px", marginTop: "30px" }}>
      {props.data &&
        props.data.map((tag) => (
          <Grid item xs={3} key={tag.id}>
            <Box
              sx={{
                backgroundColor:
                  props.tagActiveId == tag.id ? "#063f5c" : "white",
                color: props.tagActiveId == tag.id ? "white" : "black",
                height: 50,
                border: "1px solid #063f5c",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#063f5c",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={() => props.onClickSetTagActive(tag)}>
              <Typography
                variant="h4"
                noWrap
                component="a"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textDecoration: "none",
                  textAlign: "center",
                }}>
                {tag.name}
              </Typography>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}

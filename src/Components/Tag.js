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
      columnSpacing={{ xs: 0.5, sm: 1, md: 1 }}
      sx={{
        marginBottom: { xs: "10px", md: "30px" },
        marginTop: { xs: "5px", md: "30px" },
      }}>
      {props.data &&
        props.data.map((tag) => (
          <Grid item xs={3} key={tag.id}>
            <Box
              sx={{
                backgroundColor:
                  props.tagActiveId === tag.id ? "#063f5c" : "white",
                color: props.tagActiveId === tag.id ? "white" : "black",
                height: { xs: 20, md: 50 },
                border: "1px solid #063f5c",
                borderRadius: { xs: 1, md: 3 },
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
                noWrap
                component="a"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: { xs: "8px", md: "20px" },
                }}>
                {tag.name}
              </Typography>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}

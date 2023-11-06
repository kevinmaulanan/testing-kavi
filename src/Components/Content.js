import * as React from "react";
import Card from "@mui/material/Card";
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

import CardItem from "./Card";
import ContentTitle from "./ContentTitle";

export default function Content(props) {
  return (
    <Box sx={{ marginTop: { xs: 3, md: 2 } }}>
      <ContentTitle {...props} />

      <CardItem {...props} />
    </Box>
  );
}

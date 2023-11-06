import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, Box, Link } from "@mui/material";

import ContentTitle from "./ContentTitle";
import CardCostume from "./CardCostume";

export default function ContentCostume(props) {
  return (
    <Box sx={{ marginTop: { xs: 3, md: 2 } }}>
      <ContentTitle {...props} />
      <CardCostume {...props} />
    </Box>
  );
}

import * as React from "react";
import { Box, Link } from "@mui/material";

import ContentTitle from "./ContentTitle";
import CardProductItem from "./CardProduct";

export default function Content(props) {
  return (
    <Box sx={{ marginTop: { xs: 3, md: 2 } }}>
      <ContentTitle {...props} />
      <CardProductItem {...props} />
    </Box>
  );
}

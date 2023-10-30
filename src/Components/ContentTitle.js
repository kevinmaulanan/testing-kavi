import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

export default function ContentTitle(props) {
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
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontWeight: "bold",
              color: "#808080",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() =>
              props.redirectPageByButton(props.labelName, props.redirectUrl)
            }>
            Lihat Semua
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

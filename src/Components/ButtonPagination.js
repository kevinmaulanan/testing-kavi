import * as React from "react";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, CircularProgress } from "@mui/material";

export default function ButtonPagination(props) {
  return (
    <LoadingButton
      disabled={props.isLoading}
      sx={{
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#063f5c",
        color: "white",
        height: { xs: "40px", md: "60px" },
        border: "1px solid #063f5c",
        borderRadius: "39px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.4s ease;",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#063f5c",
          color: "white",
          transform: "scale(1.05)",
        },
      }}
      onClick={() => props.loadItem()}>
      {props.isLoading ? (
        <CircularProgress sx={{ color: "white" }} />
      ) : (
        <Typography
          // variant="h4"
          noWrap
          component="a"
          sx={{
            display: "flex",
            fontFamily: "monospace",
            fontWeight: "bold",
            textDecoration: "none",
            textAlign: "center",
            color: "white",
            fontSize: { xs: "12px", md: "20px" },
          }}>
          Tampilkan Lebih Banyak
        </Typography>
      )}
    </LoadingButton>
  );
}

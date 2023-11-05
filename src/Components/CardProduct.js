import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

export default function CardProductItem(props) {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
      {props.data &&
        props.data.map((item) => (
          <Grid item xs={12} md={3} key={item.id}>
            <Card variant="outlined" sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 100 }}
                  image={item.image}
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
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div">
                    {item.qty} PCS
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";

export default function CardProductItem(props) {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 1, md: 2 }}
      columnSpacing={{ xs: 0.5, sm: 1, md: 1 }}>
      {props.data &&
        props.data.map((item) => (
          <Grid item xs={4} md={2} key={item.id}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "white",
                maxWidth: 345,
                "&:hover": {
                  borderColor: `green`,
                  border: 1,
                },
              }}
              onClick={() =>
                props.redirectPage(props.redirectUrl + "/" + item.id)
              }>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="green iguana"
                  sx={{
                    height: { xs: "100px", md: "160px" },
                    transition: "0.4s ease;",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    color="text.secondary"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "11px", md: "14px" },
                    }}
                    className="content-body-text">
                    {item.description || item.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    align="justify"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "11px", md: "16px", marginTop: "5px" },
                      color: "#ff7dc2",
                    }}
                    className="content-body-text">
                    Rp. 120.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

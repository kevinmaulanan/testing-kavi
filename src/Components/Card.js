import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function CardItem(props) {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 1, md: 2 }}
      columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      {props.data &&
        props.data.map((item) => (
          <Grid item xs={6} md={3} key={item.id}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "white",
                maxWidth: 345,
                height: "100%",
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
                  alt={item.image}
                  sx={{
                    height: { xs: "100px", md: "140px" },
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
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

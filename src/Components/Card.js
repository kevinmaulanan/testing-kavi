import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function CardItem(props) {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
      {props.data &&
        props.data.map((item) => (
          <Grid item xs={6} md={3} key={item.id}>
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
                    align="justify"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "11px", md: "16px" },
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

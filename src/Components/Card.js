import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function CardItem(props) {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
      {props.data &&
        props.data.map((item) => (
          <Grid item xs={3} key={item.id}>
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
                  height="140"
                  image={item.image}
                  alt="green iguana"
                  sx={{
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

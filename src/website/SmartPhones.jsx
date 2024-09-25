import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
const SmartPhones = ({ BrandApi }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        {BrandApi.map((elem, index) => {
          return (
            <>
              <span key={index}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {elem.id}
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={elem.title}
                  subheader={elem.brand}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={elem.thumbnail}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {elem.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites"></IconButton>
                </CardActions>
              </span>
            </>
          );
        })}
      </Card>
    </>
  );
};

export default SmartPhones;

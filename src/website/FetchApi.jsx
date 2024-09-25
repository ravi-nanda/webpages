import React from "react";
import "@fontsource/inter";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Navbar from "./Navbar";

const FetchApi = ({ updateData }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <>
      {/* <Navbar apiData={apiData} /> */}
      <div style={divStyle}>
        {updateData?.map((elem, ind) => {
          return (
            <>
              <Box key={ind} sx={{ flexGrow: 1 }}>
                <Item>
                  <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
                    <CardOverflow>
                      <AspectRatio sx={{ minWidth: 200 }}>
                        <img
                          src={elem.thumbnail}
                          srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                      <Typography level="body-xs">{elem.brand}</Typography>
                      <Link
                        href="#product-card"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                      >
                        {elem.title}
                      </Link>

                      <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: "xl" }}
                        endDecorator={
                          <Chip
                            component="span"
                            size="sm"
                            variant="soft"
                            color="success"
                          >
                            Lowest price
                          </Chip>
                        }
                      >
                        {elem.price}
                      </Typography>
                      <Typography level="body-sm">
                        (Only <b>{elem.stock}</b> left in stock!)
                      </Typography>
                    </CardContent>
                    <CardOverflow>
                      <Button variant="solid" color="danger" size="lg">
                        Add to cart
                      </Button>
                    </CardOverflow>
                  </Card>
                </Item>
              </Box>
            </>
          );
        })}
      </div>
    </>
  );
};
export default FetchApi;

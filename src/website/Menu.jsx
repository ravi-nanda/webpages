import React, { useEffect, useState } from "react";
import FetchApi from "./FetchApi";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import CountPagination from "./CountPagination";

const Menu = () => {
  const [apiData, setApiData] = useState();
  const [updateData, setUpdateData] = useState();
  const [pageSkip, setPageSkip] = useState();
  const callApi = async (skip) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      const data = await res.json();
      setApiData(data.products);
      setUpdateData(data.products);
      setPageSkip(data.total / 50);
    } catch (error) {
      console.log("page not found 404");
    }
    //
  };

  useEffect(() => {
    callApi(0);
  }, []);

  const filterItem = (category) => {
    const updatedItem = apiData.filter((curElem) => {
      return curElem.category === category;
    });
    // console.log(updatedItem);
    setUpdateData(updatedItem);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => setUpdateData(apiData)}
              >
                LOGO
              </Button>
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              logo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* <Button sx={{ my: 2, color: "white", display: "block" }}></Button> */}
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => filterItem("smartphones")}
              >
                smartphones
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => filterItem("laptops")}
              >
                laptops
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => filterItem("skincare")}
              >
                skincare
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => filterItem("groceries")}
              >
                groceries
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <FetchApi
        // apiData={apiData}
        updateData={updateData}
      />
      <CountPagination pageSkip={pageSkip} callApi={callApi} />
    </>
  );
};
export default Menu;

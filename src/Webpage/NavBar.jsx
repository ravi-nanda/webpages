import React, { useEffect, useState } from "react";
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
import MainContainer from "./MainContainer";
const NavBar = ({ apiData }) => {
  const [updateApi, setUpdateApi] = useState();
  const handleSubmit = (category) => {
    const updateFilter = apiData.filter((curElem) => {
      return curElem.category === category;
    });

    setUpdateApi(updateFilter);
  };
  useEffect(() => {
    setUpdateApi(apiData);
  }, [apiData]);
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
              onClick={() => setUpdateApi(apiData)}
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
              LOGO
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              onClick={() => setUpdateApi(apiData)}
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
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* <Button sx={{ my: 2, color: "white", display: "block" }}></Button> */}
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleSubmit("smartphones")}
              >
                smartphones
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleSubmit("laptops")}
              >
                laptops
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleSubmit("skincare")}
              >
                skincare
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleSubmit("groceries")}
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
      <MainContainer updateApi={updateApi} />
    </>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CountriesPagination from "./CountriesPagination";
const SearchCountries = ({ updatedSelectData, searchCountries }) => {
  const [searchItem, setSearchItem] = useState("");
  const [updatedSearch, setUpdatedSearch] = useState();

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
    const SearchFilter = updatedSelectData.filter((curElem) => {
      return curElem.name.includes(searchItem);
    });

    setUpdatedSearch(SearchFilter);
  };

  useEffect(() => {
    setUpdatedSearch(updatedSelectData);
  }, [updatedSelectData]);

  return (
    <>
      <Grid xs={8}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
            m: "2px 4px",
            border: "1px solid black",
          }}
        >
          <InputBase
            sx={{ m: 1, ml: 1, flex: 1 }}
            placeholder="Search "
            value={searchItem}
            onChange={handleSearch}
            inputProps={{ "aria-label": "search " }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <CountriesPagination updatedSearch={updatedSearch} />
    </>
  );
};

export default SearchCountries;

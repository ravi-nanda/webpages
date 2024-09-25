import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";

import SearchCountries from "./SearchCountries";

const SelectCountries = ({ searchCountries }) => {
  const [selectValue, setSelectValue] = useState();
  const [updatedSelectData, setUpdatedSelectData] = useState([]);

  const handleChange = (event, value) => {
    setSelectValue(event.target.value);
  };

  useEffect(() => {
    setUpdatedSelectData(searchCountries);
  }, [searchCountries]);

  const handleClick = (name) => {
    const updateSelectCountries = searchCountries.filter((curElem) => {
      return curElem.name === name;
    });
    setUpdatedSelectData(updateSelectCountries);
  };

  return (
    <>
      {/* <Box
        sx={{
          MaxWidth: "100%",
          display: "flex",
          justifyContent: "space-around",
          m: 1,
        }}
      > */}
      <Grid xs={8}>
        <FormControl sx={{ width: 500 }}>
          <InputLabel id="demo-multiple-checkbox-label">Countries</InputLabel>

          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            // multiple
            value={selectValue}
            onChange={handleChange}
            input={<OutlinedInput label="Countries" />}
          >
            <MenuItem>
              <em>UnSelectCountries</em>
            </MenuItem>
            {searchCountries?.map((curElem, index) => {
              const { name } = curElem;
              return (
                <MenuItem key={index} value={name}>
                  <ListItemText
                    onClick={() => handleClick(name)}
                    primary={name}
                  />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      <SearchCountries
        updatedSelectData={updatedSelectData}
        searchCountries={searchCountries}
      />
    </>
  );
};

export default SelectCountries;

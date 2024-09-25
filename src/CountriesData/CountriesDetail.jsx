import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const CountriesDetail = ({ updatedSearch, countPagination }) => {
  const [storageData, setStorageData] = useState(
    JSON.parse(localStorage.getItem("StateData")) || []
  );

  const handleIcon = (curElem, index) => {
    let storageDataCopy = JSON.parse(localStorage.getItem("StateData")) || [];
    if (!storageDataCopy.includes(curElem.id)) {
      storageDataCopy.push(curElem.id);
    } else {
      const newIndex = storageDataCopy.indexOf(curElem.id);
      storageDataCopy.splice(newIndex, 1);
    }
    setStorageData(storageDataCopy);

    localStorage.setItem("StateData", JSON.stringify(storageDataCopy));
  };
  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ height: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Favorites
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Country Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  country Code
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  State Name
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  state Code
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  latitude
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  longitude
                </TableCell>
              </TableRow>
            </TableHead>
            {countPagination?.map((curElem, index) => {
              return (
                <TableBody key={index}>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align="center" colSpan={2}>
                      <FavoriteTwoToneIcon
                        color="info"
                        onClick={() => handleIcon(curElem, index)}
                        sx={
                          storageData.includes(curElem.id)
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      />
                    </TableCell>

                    <TableCell align="center" colSpan={2}>
                      {curElem.name}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {curElem.country_code}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {curElem.name}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {curElem.state_code}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {curElem.latitude}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {curElem.longitude}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default CountriesDetail;

import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CountryDetail from "./CountryDetail";

const CountryPagnation = ({ dataStore }) => {
  const [pageCount, setPageCount] = useState(1);
  const [newData, setNewData] = useState();
  const handleChange = (event, value) => {
    setPageCount(value);
    setNewData(dataStore.slice(value * 10 - 10, value * 10));
    // switch (value) {
    //   case 1:
    //     setNewData(dataStore.slice(0, 10));
    //     break;
    //   case 2:
    //     setNewData(dataStore.slice(10, 20));
    //     break;
    //   case 3:
    //     setNewData(dataStore.slice(20, 30));
    //     break;
    //   case 4:
    //     setNewData(dataStore.slice(30, 40));
    //     break;
    //   case 5:
    //     setNewData(dataStore.slice(40, 50));
    //     break;
    //   case 6:
    //     setNewData(dataStore.slice(50, 60));
    //     break;
    //   case 7:
    //     setNewData(dataStore.slice(60, 70));
    //     break;
    //   case 8:
    //     setNewData(dataStore.slice(70, 80));
    //     break;
    //   case 9:
    //     setNewData(dataStore.slice(80, 90));
    //     break;
    //   case 10:
    //     setNewData(dataStore.slice(90, 100));
    //     break;
    //   default:
    //     break;
    // }
  };
  useEffect(() => {
    setNewData(dataStore?.slice(0, 10));
  }, [dataStore]);
  return (
    <>
      <CountryDetail newData={newData} />

      <Stack
        spacing={5}
        sx={{
          alignItems: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          color: "#a500cb",
          marginTop: "2rem",
        }}
      >
        <Pagination
          count={10}
          page={pageCount}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handleChange}
          // defaultPage={firstPage}
        />
      </Stack>
    </>
  );
};

export default CountryPagnation;

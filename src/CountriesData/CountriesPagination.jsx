import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CountriesDetail from "./CountriesDetail";

const CountriesPagination = ({ updatedSearch }) => {
  const [pageCount, setPageCount] = useState(1);

  const [countPagination, setCountPagination] = useState();

  const handleChange = (event, value) => {
    setPageCount(value);
    setCountPagination(updatedSearch.slice(value * 10 - 10, value * 10));

    // switch (value) {
    //   case 1:
    //     setCountPagination(updatedSearch.slice(0, 10));
    //     break;
    //   case 2:
    //     setCountPagination(updatedSearch.slice(10, 20));
    //     break;
    //   case 3:
    //     setCountPagination(updatedSearch.slice(20, 30));
    //     break;
    //   case 4:
    //     setCountPagination(updatedSearch.slice(30, 40));
    //     break;
    //   case 5:
    //     setCountPagination(updatedSearch.slice(40, 50));
    //     break;
    //   case 6:
    //     setCountPagination(updatedSearch.slice(50, 60));
    //     break;
    //   case 7:
    //     setCountPagination(updatedSearch.slice(60, 70));
    //     break;
    //   case 8:
    //     setCountPagination(updatedSearch.slice(70, 80));
    //     break;
    //   case 9:
    //     setCountPagination(updatedSearch.slice(80, 90));
    //     break;
    //   case 10:
    //     setCountPagination(updatedSearch.slice(90, 100));
    //     break;
    //   default:
    //     break;
    // }
  };
  console.log(countPagination);

  useEffect(() => {
    setCountPagination(updatedSearch?.slice(0, 10));
  }, [updatedSearch]);

  return (
    <>
      <CountriesDetail
        updatedSearch={updatedSearch}
        countPagination={countPagination}
      />

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
          defaultPage={1}
        />
      </Stack>
    </>
  );
};

export default CountriesPagination;

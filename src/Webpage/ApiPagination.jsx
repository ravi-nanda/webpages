import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ApiPagination = ({ CountPagination, CallApi }) => {
  const [countPage, setCountPage] = useState(1);

  const handleChange = (event, value) => {
    setCountPage(value);
    switch (value) {
      case 1:
        CallApi(20);
        break;
      case 2:
        CallApi(40);
        break;
      case 3:
        CallApi(60);
        break;
      case 4:
        CallApi(80);
        break;
      case 5:
        CallApi(90);
        break;
      default:
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={CountPagination}
          page={countPage}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default ApiPagination;

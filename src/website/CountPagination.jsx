import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

const CountPagination = ({ pageSkip, callApi }) => {
  const [pageCount, setPageCount] = useState(1);

  const handleChange = (event, value) => {
    setPageCount(value);
    value === 1 ? callApi(0) : callApi(50);
  };
  const footer = {
    display: "flex",
    boxFlex: "wrap",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    color: "#a500cb",
    marginTop: "2rem",
  };

  return (
    <div style={footer}>
      <Pagination
        color="secondary"
        count={pageSkip}
        variant="text"
        shape="rounded"
        page={pageCount}
        onChange={handleChange}
        defaultPage={1}
        size="large"
      />
    </div>
  );
};

export default CountPagination;

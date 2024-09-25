import React, { useState, useEffect } from "react";

const RunTime = () => {
  const Style_css = {
    textAlign: "center",
    margin: 20,
  };
  return (
    <>
      <div style={Style_css}>
        <h1>Time Stop 9Second</h1>
        <h1 className="m-20">time</h1>

        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 m-30">
          StartTime
        </button>
      </div>
    </>
  );
};

export default RunTime;

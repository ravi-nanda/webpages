import React, { useState, useEffect } from "react";

const AsyncApi = () => {
  const [apiData, setApiData] = useState();

  const CallApi = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const Data = await res.json();
      setApiData(Data.products);
    } catch (error) {}
  };

  useEffect(() => {
    CallApi();
  }, []);

  console.log(apiData);
  return <></>;
};

export default AsyncApi;

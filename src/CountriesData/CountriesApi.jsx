import React, { useEffect, useState } from "react";

import SelectCountries from "./SelectCountries";

const CountriesApi = () => {
  const [searchCountries, setSearchCountries] = useState();
  // const [totalCountries, setTotalCountries] = useState();
  const ApiCall = async (skip) => {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json`
      );
      const data = await res.json();
      setSearchCountries(data);
    } catch (error) {}
  };

  useEffect(() => {
    ApiCall();
  }, []);
  return (
    <>
      <SelectCountries searchCountries={searchCountries} />
    </>
  );
};

export default CountriesApi;

import React, { useEffect, useState } from "react";
import CountryPagnation from "./CountryPagnation";

const Country = () => {
  const [dataStore, setDataStore] = useState();

  const findApi = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json"
    );
    const data = await res.json();
    setDataStore(data);
  };
  useEffect(() => {
    findApi();
  }, []);

  return (
    <>
      <div>
        <CountryPagnation dataStore={dataStore} />
      </div>
    </>
  );
};

export default Country;

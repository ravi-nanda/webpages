import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ApiPagination from "./ApiPagination";
import { PacmanLoader } from "react-spinners";
const ApiData = () => {
  const [apiData, setApiData] = useState([]);
  const [CountPagination, setCountPagination] = useState();
  const [loading, setLoading] = useState(true);
  const CallApi = async (skip) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      const data = await res.json();
      setApiData(data.products);
      setCountPagination(data.total / 20);
      setLoading(false);
    } catch (error) {
      alert("website not working error404");
    }
  };

  useEffect(() => {
    CallApi(0);
  }, []);

  const loadingCss = {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "30vh",
    left: "40%",
  };

  return (
    <>
      {loading ? (
        <PacmanLoader
          color={"#36d7b7"}
          loading={loading}
          cssOverride={loadingCss}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <NavBar apiData={apiData} />
          <ApiPagination CountPagination={CountPagination} CallApi={CallApi} />
        </>
      )}
    </>
  );
};

export default ApiData;

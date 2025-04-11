import React, { useEffect, useState } from "react";
import CountrieaShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  console.log(data);
  if (countriesData.length === 0) {
    return <CountrieaShimmer />;
  }
  return (
    <>
      <div className="Countries-container">
        <h1>Countries List</h1>
      </div>
    </>
  );
};

export default CountriesList;

import React, { useEffect, useState } from "react";
import CountrieaShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (countriesData.length === 0) {
    return <CountrieaShimmer />;
  }
  return (
    <>
      <div className="Countries-container">
        <h1>Countries List</h1>
        {countriesData
          .filter((country) =>
            query
              ? country.name.common.toLowerCase().includes(query.toLowerCase())
              : true
          )
          .map((country) => (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0] || "N/A"}
            />
          ))}
      </div>
    </>
  );
};

export default CountriesList;

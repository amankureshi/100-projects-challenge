import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [countryName]);

  if (!country) return <h2>Loading....</h2>;
  return (
    <div>
      <h2>Details for {countryName}</h2>
    </div>
  );
};

export default CountryDetails;

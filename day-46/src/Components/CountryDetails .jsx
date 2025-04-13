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
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`${country.name.common}flag`}
        width={200}
      />
      <p>
        <strong>Capital:</strong>
        {country.capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Subregion:</strong> {country.subregion}
      </p>
      <p>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString("en-In")}
      </p>
      <p>
        <strong>Area:</strong> {country.area} km²
      </p>
    </div>
  );
};

export default CountryDetails;

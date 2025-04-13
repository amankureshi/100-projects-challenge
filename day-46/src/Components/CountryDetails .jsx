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
    <div className="country-details-container">
      <Link className="back-button" to="/">
        ← Back to Countries
      </Link>
      <div className="country-details-card">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="country-flag"
        />
        <div className="country-info">
          <h2>{country.name.common}</h2>
          <p>
            <b>Capital:</b> {country.capital?.[0] || "N/A"}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Subregion:</b> {country.subregion}
          </p>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p>
            <b>Area:</b> {country.area} km²
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

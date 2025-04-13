import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css";
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
          <div className="info-box">
            <strong>Capital:</strong>
            <span>{country.capital?.[0] || "N/A"}</span>
          </div>
          <div className="info-box">
            <strong>Region:</strong>
            <span>{country.region}</span>
          </div>
          <div className="info-box">
            <strong>Subregion:</strong>
            <span>{country.subregion}</span>
          </div>
          <div className="info-box">
            <strong>Population:</strong>
            <span>{country.population.toLocaleString()}</span>
          </div>
          <div className="info-box">
            <strong>Area:</strong>
            <span>{country.area} km²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

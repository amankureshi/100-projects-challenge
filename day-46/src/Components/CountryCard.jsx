import React from "react";
import "./CountryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <div className="card-container">
      <Link className="country-card" to={`/${name}`}>
        <img src={flag} alt={`${name} flag`} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: {region}</b>
          </p>
          <p>
            <b>Capital: {capital}</b>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;

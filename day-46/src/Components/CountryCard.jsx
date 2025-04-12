import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <div>
      <Link className="country-card" to={`/$name`}>
        <img src={flag} alt={name + "flag"} />
        <div className="card-text">
          <h3 className="catd-title">{name}</h3>
          <p>
            <b>Population</b>
            {population.toLocalString("en-In")}
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

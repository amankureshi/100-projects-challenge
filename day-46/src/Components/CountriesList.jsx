import React, { useEffect, useState } from "react";
import CountrieaShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  return (
    <>
      {!countriesData.length ? (
        <CountrieaShimmer />
      ) : (
        <div className="Countries-container">
          <h1>Countries List</h1>
        </div>
      )}
    </>
  );
};

export default CountriesList;

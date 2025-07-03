import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();

  return (
    <div>
      <div className="weather-app">
        <input
          type="text"
          placeholder="Enter city name"
          typeof="text"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Weather;

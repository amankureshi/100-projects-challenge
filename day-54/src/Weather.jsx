import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState();

  const fetchWeather = async () => {
    if (!city) return;
  };

  const API_KEY = "this is my api";

  return (
    <div>
      <div className="weather-app">
        <input
          type="text"
          placeholder="Enter city name"
          typeof="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
    </div>
  );
};

export default Weather;

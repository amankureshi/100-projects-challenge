import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState();

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(``);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError("City is not found.");
      }
    } catch (err) {
      setError("Something is wrong!");
      setWeather(null);
    }
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

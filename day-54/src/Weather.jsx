import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState();

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      console.log(API_KEY);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
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

  return (
    <div>
      <div
        className={`weather-app ${
          weather ? weather.weather[0].main.toLowerCase() : ""
        }`}
      >
        <input
          type="text"
          placeholder="Enter city name"
          typeof="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
        {error && <p className="error">{error}</p>}
        {weather && (
          <div className="waether-info">
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].main}</p>
            <p>{Math.round(weather.main.temp)}c</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

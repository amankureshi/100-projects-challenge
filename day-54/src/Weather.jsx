import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      // Current Weather API
      const res1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data1 = await res1.json();

      // Forecast API
      const res2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data2 = await res2.json();

      if (data1.cod === 200 && data2.cod === "200") {
        setWeather(data1);
        setForecast(data2.list);
        setError("");
      } else {
        setWeather(null);
        setForecast(null);
        setError("City not found.");
      }
    } catch (err) {
      setError("Something went wrong!");
      setWeather(null);
      setForecast(null);
    }

    setLoading(false);
  };

  return (
    <div
      className={`weather-app ${
        weather ? weather.weather[0].main.toLowerCase() : ""
      }`}
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchWeather();
          }}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {loading && <div className="loader"></div>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].main}</p>
          <p>{Math.round(weather.main.temp)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      )}

      {forecast && (
        <div className="forecast">
          <h4>Next 5 Days</h4>
          <div className="forecast-list">
            {forecast
              .filter((_, index) => index % 8 === 0)
              .map((f, i) => (
                <div key={i} className="forecast-item">
                  <p>{new Date(f.dt_txt).toDateString()}</p>
                  <p>{Math.round(f.main.temp)}°C</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${f.weather[0].icon}.png`}
                    alt="forecast-icon"
                  />
                  <p>{f.weather[0].main}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

import React from "react";

const WeatherCard = ({ weatherData }) => {

  if (!weatherData) return <p>Loading...</p>;

  const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black text-white p-4 rounded-2xl border-2 shadow-md flex items-center gap-4">
      <img src={weatherIcon} alt={weatherData.weather[0].description} className="shadow-lg shadow-black" />
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;

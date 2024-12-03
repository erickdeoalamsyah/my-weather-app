import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import useWeather from "../hooks/useWeather";
import { FaSearch } from "react-icons/fa";

const WeatherDisplay = () => {
  const defaultCity = "Indonesia";
  const [inputCity, setInputCity] = useState(""); 
  const [initialLoad, setInitialLoad] = useState(true);
  const { setCity, weatherData, forecastData, fetchWeather, isLoading, error } =
    useWeather();

  useEffect(() => {
    
    if (initialLoad) {
      fetchWeather(defaultCity); 
      setCity(defaultCity); 
      setInitialLoad(false);
    }
  }, [initialLoad, fetchWeather, setCity, defaultCity]);

  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity); 
      fetchWeather(inputCity); 
      setInputCity(""); 
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div className="max-w-md mx-auto pt-10">
      <div className="flex gap-2 text-white mb-4">
        <input
          type="text"
          value={inputCity} 
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter City or Country"
          className="flex-1 p-2 px-4 border-2  rounded-2xl bg-gradient-to-r from-blue-900 to-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-1000 text-white px-4 py-2 border-2  rounded-3xl bg-gradient-to-r from-blue-900 to-black"
        >
          <FaSearch />
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center my-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!isLoading && error && (
        <div className="bg-red-600 text-white text-center p-4 rounded-lg mb-4">
          <p className="text-sm font-bold">
          Sorry, the city or country you searched for was not found.
          </p>
        </div>
      )}

      {!isLoading && weatherData && <WeatherCard weatherData={weatherData} />}
      {!isLoading && forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
};

export default WeatherDisplay;

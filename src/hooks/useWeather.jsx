import { useState, useEffect } from "react";
import { fetchWeatherData, fetchForecastData } from "../services/weatherService";

const useWeather = (defaultCity = "Jakarta") => {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // State untuk pesan error

  const fetchWeather = async (selectedCity = city) => {
    setIsLoading(true);
    setError(null); // Reset error sebelum melakukan fetch
    try {
      const weather = await fetchWeatherData(selectedCity);
      setWeatherData(weather);

      const forecast = await fetchForecastData(selectedCity);
      setForecastData(forecast);
    } catch (err) {
      console.error(err);
      setError(err.message); // Simpan pesan error
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(defaultCity);
  }, [defaultCity]);

  return {
    city,
    setCity,
    weatherData,
    forecastData,
    fetchWeather,
    isLoading,
    error, // Return error state
  };
};

export default useWeather;


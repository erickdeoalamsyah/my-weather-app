const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.cod !== 200) {
      throw new Error(data.message || "City not found");
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // rethrow to be handled by the calling function
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.cod !== "200") {
      throw new Error(data.message || "Forecast not found");
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error; // rethrow to be handled by the calling function
  }
};

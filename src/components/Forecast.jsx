import React, { useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Forecast = ({ forecastData }) => {
  const scrollRef = useRef(null); 

  if (!forecastData) return <p>Loading...</p>;

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black p-4 rounded-2xl shadow-md border-2  mt-4">
      <h3 className="text-xl text-white font-semibold mb-4 px-3">Prakiraan cuaca Per Jam</h3>
      <div className="relative">

        <button
          onClick={handlePrev}
          className="absolute left-[-15px] top-1/2 transform -translate-y-6 text-2xl text-white"
        >
          <GrPrevious />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 px-3" 
        >
          {forecastData.list.slice(0, 8).map((forecast, index) => {
            const weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            const time = new Date(forecast.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={index}
                className="flex-shrink-0 p-2 border-2 border-white text-white rounded-md min-w-[100px] text-center mb-4 shadow-lg shadow-black"
              >
                <p className="text-sm font-bold">{time}</p>
                <img
                  src={weatherIcon}
                  alt={forecast.weather[0].description}
                  className="mx-auto"
                />
                <p className="text-lg font-semibold">{forecast.main.temp}°C</p>
                <p className="text-sm">{forecast.weather[0].description}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-15px] top-1/2 transform -translate-y-6 text-2xl text-white"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Forecast;

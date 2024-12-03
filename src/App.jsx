import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-blue-900"
      }`}
    >
      <Header />
      <div className="max-w-3xl mx-auto p-4">
        <WeatherDisplay/>
      </div>
    </div>
  );
};

export default App;

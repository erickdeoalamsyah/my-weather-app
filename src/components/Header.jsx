import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-900 to-black border-b-2  text-white"
    >
      <h1 className="text-xl font-semibold">Weather App</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;

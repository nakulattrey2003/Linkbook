import { FaMoon, FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import React from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full text-cyan-500 dark:text-cyan-500 bg-gray-200 dark:bg-gray-800 transition"
    >
      {darkMode ? (
        <IoSunny className="text-gray-400 size-4" />
      ) : (
        <FaMoon className="text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;

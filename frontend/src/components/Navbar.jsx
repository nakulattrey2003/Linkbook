import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-slate-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="w-6 h-6" />
          <span className="text-cyan-500 text-xl font-semibold">Linkbook</span>
        </div>

        {/* Wrapper for Nav Links & User Profile */}
        <div className="flex items-center space-x-6 ml-auto">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-500 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <img
              src="/assets/user.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-cyan-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyan-300 text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

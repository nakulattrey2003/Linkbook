import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply dark mode globally
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
    <Router>
      <div
        className={`bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

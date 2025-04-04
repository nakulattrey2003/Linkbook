import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );


  return (
    <Router>
      <div
        className={`bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

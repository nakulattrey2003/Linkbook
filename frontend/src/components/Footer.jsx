import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="LinkBook Logo" className="w-6 h-6" />
          <span className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
            Linkbook
          </span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition text-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} LinkBook. All rights reserved by Nakul.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

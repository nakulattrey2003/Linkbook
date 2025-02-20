import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo & Brand */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="LinkBook Logo" className="w-6 h-6 mb-2" />
          <div className="text-cyan-500 text-lg mb-2 ml-1 font-semibold">
            Linkbook
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-slate-500 hover:text-cyan-500 transition text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-cyan-500 transition text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-cyan-500 transition text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-cyan-500 transition text-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} LinkBook. All rights reserved by Nakul.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

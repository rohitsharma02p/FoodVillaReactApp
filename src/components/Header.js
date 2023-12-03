import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../assets/company.js";

function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <div className="flex items-center space-x-7">
                <SVGIcon />
                <span className="text-base font-medium">Delhi, India</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Link
              to="/features"
              className="text-base font-medium hover:text-gray-700"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-base font-medium hover:text-gray-700"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-base font-medium hover:text-gray-700"
            >
              About
            </Link>
            <Link
              to="/login"
              className="whitespace-nowrap text-base font-medium hover:text-gray-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-white hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

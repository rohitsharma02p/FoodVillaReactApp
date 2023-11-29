import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/company_logo.jpg";

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Link
              to="/features"
              className="text-base font-medium hover:text-gray-300"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-base font-medium hover:text-gray-300"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-base font-medium hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/login"
              className="whitespace-nowrap text-base font-medium hover:text-gray-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-800 bg-white hover:bg-gray-50"
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

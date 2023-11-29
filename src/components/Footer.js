import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex-grow text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Food Villa. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

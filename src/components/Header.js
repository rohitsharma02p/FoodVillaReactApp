import React from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../assets/company.js";
import { useSelector } from "react-redux";

function Header() {
  return (
    <header className="bg-white text-gray-900 shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Logo />
          <NavigationLinks />
        </div>
      </nav>
    </header>
  );
}

const ContentWithHeader = ({ children }) => (
  <div className="pt-20">{children}</div>
);

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/">
      <div className="flex items-center space-x-7">
        <SVGIcon />
        <span className="text-base font-medium">Delhi, India</span>
      </div>
    </Link>
  </div>
);

const NavigationLinks = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const links = [
    { route: "parent", text: "Features" },
    { route: "pricing", text: "Pricing" },
    { route: "about", text: "About" },
    { route: "login", text: "Login" },
    { route: "cart", text: `Cart- ${cartItems.length} items` },
  ];

  return (
    <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
      {links.map((link) => (
        <LinkComponent key={link.route} route={link.route} text={link.text} />
      ))}
    </div>
  );
};

const LinkComponent = ({ route, text }) => (
  <Link to={`/${route}`} className="text-base font-medium hover:text-gray-700">
    {text}
  </Link>
);

export { Header, ContentWithHeader };

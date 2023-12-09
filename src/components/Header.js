import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SVGIcon from "../assets/company.js";
import UserContext from "../utils/UserContext.js";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="bg-white text-gray-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Logo />
          <NavigationLinks />
          <div>
            <span>{user.name}</span>
            <input
              type="text"
              value={user.name}
              // onChange={(e) => {
              //   setUser({
              //     ...user,
              //     name: e.target.value,
              //   });
              // }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

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
  const links = [
    { route: "parent", text: "Features" },
    { route: "pricing", text: "Pricing" },
    { route: "about", text: "About" },
    { route: "login", text: "Login" },
    { route: "signup", text: "Sign Up" },
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

export default Header;

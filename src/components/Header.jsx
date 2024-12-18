import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={isDarkMode ? "dark-mode" : ""}>
      <a href="/" className="logo">
      portfolio
      </a>

      {/* Hamburger and Navigation Menu */}
      <div className="navigation-container">
        {/* Hamburger Button */}
        <div
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Full Navigation */}
        <nav className={`navigation ${isMenuActive ? "active" : ""}`}>
          <a href="/" onClick={handleLinkClick}>Home</a>
          <ScrollLink to="Services" onClick={handleLinkClick}>Services</ScrollLink>
          <ScrollLink to="Skills" onClick={handleLinkClick}>Skills</ScrollLink>
          <Link to="/Contact" onClick={handleLinkClick}>Contact</Link>
          
        </nav>
      </div>

      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle" id="button1">
        <i className={isDarkMode ? "fa fa-sun" : "fa fa-moon"}></i>
      </button>
      
    </header>
  );
}

export default Header;

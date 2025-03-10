import React, { useState } from "react";
import "./Navbar.css";
import gamelogo from "../../assets/gameicon2.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle_mode = () => {
    props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
  };

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={gamelogo} alt="Game Logo" className="logo" />
        <p>GameHub</p>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            className="react-link"
            to="/home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="react-link"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Games
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abishek-sivakumar-a16a18263/"
            className="react-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <Link
            className="react-link"
            to="/addgame"
            onClick={() => setMenuOpen(false)}
          >
            Add Review
          </Link>
        </li>
      </ul>

      {/* Search Box (Hidden on mobile) */}
      <div className="search-box">
        <input type="text" placeholder="Search Games" />
        <img
          src={props.theme === "light" ? search_icon_light : search_icon_dark}
          alt="Search Icon"
          className="search"
        />
      </div>

      {/* Theme Toggle */}
      <img
        src={props.theme === "light" ? toggle_light : toggle_dark}
        alt="Toggle Mode Icon"
        className="toggle-icon"
        onClick={toggle_mode}
      />
    </div>
  );
}

export default Navbar;

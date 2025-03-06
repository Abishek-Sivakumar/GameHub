import React from "react";
import "./Navbar.css";
import gamelogo from "../../assets/gameicon2.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  const toggle_mode = () => {
    props.theme == "light" ? props.setTheme("dark") : props.setTheme("light");
  };

  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={gamelogo} alt="Game Logo" className="logo" />
        <p>GameHub</p>
      </div>
      <ul>
        <li>
          <Link className="react-link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="react-link" to="/">
            Games
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abishek-sivakumar-a16a18263/"
            className="react-link"
            target="_blank"
          >
            About
          </a>
        </li>
        <li>
          <Link className="react-link" to="/addgame">
            Add Game
          </Link>
        </li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search Games" />
        <img
          src={props.theme == "light" ? search_icon_light : search_icon_dark}
          alt="Search Icon"
          className="search"
        />
      </div>
      <img
        src={props.theme == "light" ? toggle_light : toggle_dark}
        alt="Toggle Mode Icon"
        className="toggle-icon"
        onClick={() => {
          toggle_mode();
        }}
      />
    </div>
  );
}

export default Navbar;

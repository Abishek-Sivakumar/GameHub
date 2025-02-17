import React from "react";
import "./Navbar.css";
import gamelogo from "../../assets/gameicon3.jpg";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";

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
        <li>Home</li>
        <li>Games</li>
        <li>About</li>
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

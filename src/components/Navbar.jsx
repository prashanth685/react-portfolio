import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_content">
          <ul className="navbar_links">
            <li>
              <a href="#Prashanth">Prashanth S</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Skill">Skill</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
          </ul>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;

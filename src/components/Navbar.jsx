import React, { useState } from "react";
import "./Navbar.css";
import "../index.css";

const Navbar = () => {
  const [mode, setMode] = useState("light");

  const handleclick = () => {
    if (mode === "light") {
      document.body.classList.add("dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      setMode("light");
    }
  };
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
            <input type="checkbox" onClick={handleclick} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;

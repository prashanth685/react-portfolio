import React from "react";
import me from "../assets/me.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="Prashanth">
        <img src={me} alt="Me" />
        <div className="content-prashanth">
          <h1 className="name-content">Hello,im prashanth S</h1>
          <div className="content-of-mine">
            I am a passionate Front-End Developer with strong expertise in HTML,
            CSS, JavaScript, and React.js, focused on building responsive,
            user-friendly, and high-performance web applications. I enjoy
            transforming design concepts into clean, efficient code and
            continuously learning modern web technologies to deliver exceptional
            user experiences.
          </div>
          <button class="button">
            <a
              href="http://65.0.147.141:3000/"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

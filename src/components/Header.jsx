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
          <div>
            <button className="button">
              <a
                href="https://drive.google.com/file/d/18I3s5cotFx2KXo0ae_-zx4Pyr30L0sca/view?usp=sharing"
                target="__blank"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./Experience.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/reactjs.png";
import aws from "../assets/aws.png";
import github from "../assets/github.png";

const Experience = () => {
  return (
    <>
      <div className="experience_main_container" id="Experience">
        <div className="heading-main">
          <h1 className="title-work">
            Software Developer
            <span className="company-name">
              Sarayu Infotech Solutions Private limited 2025-Present
            </span>
          </h1>
          <div className="second-main">
            Currently developing a real-time Vibration Monitoring System
            utilizing the MQTT protocol for efficient and lightweight
            transmission of sensor data from edge devices. Incoming data is
            processed through a Node.js backend, stored in MongoDB, and served
            to a React.js frontend for live plotting using charting libraries
            (e.g., Chart.js/D3.js/trading view). Implemented threshold-based
            anomaly detection logic to trigger instant user alerts (e.g.,
            email/SMS/notification) when critical vibration levels are exceeded.
            Entire system is built on the MERN stack, ensuring seamless
            integration, high performance, and scalability across industrial use
            case.
            <div className="technology-used">
              <div className="tech-icon">
                <img src={html} alt="" />
              </div>
              <div className="tech-icon">
                <img src={css} alt="" />
              </div>
              <div className="tech-icon">
                <img src={js} alt="" />
              </div>
              <div className="tech-icon">
                <img src={react} alt="" />
              </div>
              <div className="tech-icon">
                <img src={aws} alt="" />
              </div>
              <div className="tech-icon">
                <img src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

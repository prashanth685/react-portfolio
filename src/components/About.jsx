import React from "react";
import me from "../assets/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center  px-4"
    >
      {/* Intro Text */}
      <p className="text-sm md:text-base lg:text-lg text-gray-400 font-mono text-center">
        <span className="text-[#27BCBC]">const </span> developer =
        <span className="text-gray-500"> "Prashanth S"</span>
      </p>

      <h2 className="text-4xl md:text-6xl text-[#27BCBC] mt-3 text-center">
        Software Developer
      </h2>

      {/* Card */}
      <div className="mt-8 w-72 bg-[#2b2b2b] border border-[#27BCBC] rounded-2xl shadow-lg hover:shadow-[#27BCBC]/40 transition-all duration-300 p-6">
        <div className="flex justify-center">
          <img
            src={me}
            alt="Prashanth S"
            className="w-28 h-28 rounded-full border-2 border-[#27BCBC] object-cover"
          />
        </div>

        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-white">Prashanth S</h3>
          <p className="text-sm text-gray-400">Software Developer</p>
        </div>

        <p className="text-gray-400 text-sm text-center mt-3">
          Passionate about building modern web applications with React and clean
          UI design.
        </p>

        <div className="flex justify-center gap-5 mt-5 text-[#27BCBC] text-xl">
          <FaGithub className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaLinkedin className="cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default About;

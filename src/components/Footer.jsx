import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="bg-[#0F1117] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#27CBCB] inline-block pb-2">
          Contact
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
          <a
            href="mailto:yourmail@example.com"
            className="flex items-center gap-3 hover:text-[#27CBCB] transition"
          >
            <FaEnvelope />
            prashanth123.solur@gmail.com
          </a>

          <a
            href="https://github.com/prashanth685"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#27CBCB] transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prashanth-s-48b57b240"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#27CBCB] transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1tYQF19f9xY70jwuPhDdn8vdvfyGqtDnr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#27CBCB] text-white px-4 py-2 rounded-lg hover:bg-[#27CBCB] transition"
          >
            <FaExternalLinkAlt /> Download Resume
          </a>
        </div>

        <div className="mt-12 text-gray-500 text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Prashanth S. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;

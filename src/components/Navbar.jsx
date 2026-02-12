import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyles =
    "relative px-3 py-2 transition-all duration-300 text-gray-300 hover:text-[#27CBCB]";

  const activeStyles =
    "text-[#27CBCB] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#27CBCB] after:rounded-full";

  return (
    <nav
      className="sticky top-0 z-50 w-full h-20 px-6 md:px-16 
      flex justify-between items-center 
      bg-[#0F1117]/80 backdrop-blur-lg border-b border-[#27CBCB]/10
      shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    >
      <a
        href="#"
        className="text-2xl font-semibold tracking-wide text-white hover:text-[#27CBCB] transition duration-300"
      >
        {"<Prashanth/>"} <span className="text-[#27CBCB]">S</span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-[17px] font-medium">
        <a href="#about" className={linkStyles}>
          {"<About />"}
        </a>

        <a href="#experience" className={linkStyles}>
          {"<Experience />"}
        </a>

        <a href="#skills" className={linkStyles}>
          {"<Skills />"}
        </a>

        <a href="#projects" className={linkStyles}>
          {"<Projects />"}
        </a>

        <a href="#contact" className={linkStyles}>
          {"<Contact />"}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

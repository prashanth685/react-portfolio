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
      <NavLink
        to="/"
        className="text-2xl font-semibold tracking-wide text-white hover:text-[#27CBCB] transition duration-300"
      >
        {"<Prashanth/>"} <span className="text-[#27CBCB]">S</span>
      </NavLink>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-[17px] font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? activeStyles : ""}`
          }
        >
          {"<About />"}
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? activeStyles : ""}`
          }
        >
          {"<Experience>"}
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? activeStyles : ""}`
          }
        >
          {"<Skills/>"}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? activeStyles : ""}`
          }
        >
          {"<Projects/>"}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? activeStyles : ""}`
          }
        >
          {"<Contact/>"}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

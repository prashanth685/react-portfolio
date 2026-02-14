import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["about", "experience", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section) =>
    `cursor-pointer transition duration-300 ${
      active === section
        ? "text-[#27CBCB] border-b-2 border-[#27CBCB]"
        : "text-gray-300 hover:text-[#27CBCB]"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F1117]/80 backdrop-blur-lg border-b border-[#27CBCB]/10 px-6 md:px-16 h-20 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-white ">
        <a href="#">{"<Prashanth/>"}</a>
        <span className="text-[#27CBCB]">S</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} className={linkStyle(section)}>
            {`<${section.charAt(0).toUpperCase() + section.slice(1)} />`}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#27CBCB] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0F1117] flex flex-col items-center py-6 gap-6 md:hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={linkStyle(section)}
            >
              {`<${section.charAt(0).toUpperCase() + section.slice(1)} />`}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import FadeInSection from "./FadeInSection";

const Projects2 = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6 md:px-20">
      <FadeInSection direction="up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#27CBCB] inline-block pb-2">
            Additional Projects
          </h1>

          {/* Full-Stack E-Commerce */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Full-Stack E-Commerce Platform
            </h2>

            <p className="flex flex-wrap text-gray-500 text-sm mt-2">
              React.js, Tailwind CSS, Context API, Axios, MongoDB
            </p>

            <div className="mt-6 text-gray-600 space-y-3 list-disc list-inside leading-relaxed">
              Developed a responsive e-commerce platform with role-based
              authentication (admin/user) and complete CRUD operations for
              product management Implemented scalable folder architecture
              following modular design patterns for improved code
              maintainability and scalability Utilized React Context API for
              global state management of user authentication, shopping cart, and
              application theme Integrated REST APIs using Axios with
              interceptors for authentication tokens and error handling Built
              admin dashboard with capabilities to add/edit products, manage
              inventory, and update shipping/order details Designed mobile-first
              responsive UI with Tailwind CSS, achieving consistent styling
              across all components and pages
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-4xl">
              <RiTailwindCssFill className="text-sky-500 hover:scale-110 transition" />
              <FaReact className="text-cyan-500 hover:scale-110 transition" />
            </div>

            {/* Project Links */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="https://dapper-boba-79db1a.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#27CBCB] text-white px-4 py-2 rounded-lg hover:bg-[#27CBCB] transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* YouTube Clone */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              YouTube Clone
            </h2>

            <p className="flex flex-wrap text-gray-500 text-sm mt-2">
              React.js, CSS3, Axios
            </p>

            <div className="mt-6 text-gray-600 space-y-3 list-disc list-inside leading-relaxed">
              Developed a fully functional YouTube clone using React for the
              frontend and CSS for responsive, modern styling. Integrated the
              YouTube Data API to fetch real-time video data, including search
              results, trending videos, and video details. Utilized Axios for
              handling API requests efficiently, ensuring smooth data retrieval
              and error handling. Implemented features such as video search,
              video playback, trending lists, and video detail pages, closely
              mimicking the functionality of YouTube. Applied component-based
              architecture in React, creating reusable and maintainable UI
              components for enhanced scalability. Focused on responsive design
              to ensure optimal user experience across desktop and mobile
              devices. Demonstrated strong understanding of REST APIs, state
              management, and asynchronous data handling in modern web
              applications.
            </div>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-4xl">
              <FaCss3Alt className="text-blue-500 hover:scale-110 transition" />
              <FaReact className="text-cyan-500 hover:scale-110 transition" />
            </div>

            {/* Project Links */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="https://fantastic-capybara-3f2f5d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#27CBCB] text-white px-4 py-2 rounded-lg hover:bg-[#27CBCB] transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects2;

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitSquare,
  FaGithub,
  FaTools,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiNpm, SiWebpack, SiVite, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import FadeInSection from "./FadeInSection";

const Skill = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#27CBCB] inline-block pb-2">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Programming Languages
            </h2>
            <FadeInSection direction="left">
              <div className="flex gap-6 text-4xl">
                <FaHtml5 className="text-orange-500 hover:scale-110 transition" />
                <FaCss3Alt className="text-blue-500 hover:scale-110 transition" />
                <FaJsSquare className="text-yellow-400 hover:scale-110 transition" />
                <FaBootstrap className="text-shadow-red-600 hover:scale-110 transition" />
                <RiTailwindCssFill className="text-purple-950 hover:scale-110 transition" />
              </div>
            </FadeInSection>
          </div>

          {/* Frameworks */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Frameworks & Libraries
            </h2>
            <FadeInSection direction="left">
              <div className="flex gap-6 text-4xl">
                <FaReact className="text-cyan-500 hover:scale-110 transition" />
                <SiRedux className="text-purple-500 hover:scale-110 transition" />
              </div>
            </FadeInSection>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Tools & Version Control
            </h2>
            <FadeInSection direction="right">
              <div className="flex flex-wrap gap-6 text-4xl">
                <FaGitSquare className="text-red-500 hover:scale-110 transition" />
                <FaGithub className="text-gray-800 hover:scale-110 transition" />
                <SiNpm className="text-red-600 hover:scale-110 transition" />
                <SiWebpack className="text-blue-400 hover:scale-110 transition" />
                <SiVite className="text-purple-400 hover:scale-110 transition" />
                <FaTools className="text-gray-600 hover:scale-110 transition" />
              </div>
            </FadeInSection>
          </div>

          {/* Database */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Database
            </h2>
            <FadeInSection direction="right">
              <div className="flex gap-6 text-4xl">
                <SiMongodb className="text-green-600 hover:scale-110 transition" />
              </div>
            </FadeInSection>
          </div>

          {/* Methodologies */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Methodologies
            </h2>
            <div className="flex gap-6 text-gray-600 font-medium">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                Agile / Scrum
              </span>
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                RESTful APIs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

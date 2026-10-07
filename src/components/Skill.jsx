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
  FaNodeJs,
} from "react-icons/fa";

import {
  SiRedux,
  SiNpm,
  SiWebpack,
  SiVite,
  SiMongodb,
  SiExpress,
  SiMqtt,
  SiSocketdotio,
} from "react-icons/si";

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
              <div className="flex flex-wrap gap-6 text-4xl">
                <FaHtml5
                  title="HTML5"
                  className="text-orange-500 hover:scale-110 transition"
                />

                <FaCss3Alt
                  title="CSS3"
                  className="text-blue-500 hover:scale-110 transition"
                />

                <FaJsSquare
                  title="JavaScript"
                  className="text-yellow-400 hover:scale-110 transition"
                />

                <FaBootstrap
                  title="Bootstrap"
                  className="text-purple-600 hover:scale-110 transition"
                />

                <RiTailwindCssFill
                  title="Tailwind CSS"
                  className="text-cyan-500 hover:scale-110 transition"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Frontend Frameworks */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Frontend Frameworks & Libraries
            </h2>

            <FadeInSection direction="left">
              <div className="flex flex-wrap gap-6 text-4xl">
                <FaReact
                  title="React.js"
                  className="text-cyan-500 hover:scale-110 transition"
                />

                <SiRedux
                  title="Redux"
                  className="text-purple-500 hover:scale-110 transition"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Backend & Real-Time Technologies */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Backend & Real-Time Technologies
            </h2>

            <FadeInSection direction="right">
              <div className="flex flex-wrap gap-6 text-4xl">
                <FaNodeJs
                  title="Node.js"
                  className="text-green-600 hover:scale-110 transition"
                />

                <SiExpress
                  title="Express.js"
                  className="text-gray-800 hover:scale-110 transition"
                />

                <SiMqtt
                  title="MQTT"
                  className="text-purple-600 hover:scale-110 transition"
                />

                <SiSocketdotio
                  title="Socket.IO"
                  className="text-gray-900 hover:scale-110 transition"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Database */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Database
            </h2>

            <FadeInSection direction="right">
              <div className="flex flex-wrap gap-6 text-4xl">
                <SiMongodb
                  title="MongoDB"
                  className="text-green-600 hover:scale-110 transition"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Tools & Version Control
            </h2>

            <FadeInSection direction="left">
              <div className="flex flex-wrap gap-6 text-4xl">
                <FaGitSquare
                  title="Git"
                  className="text-red-500 hover:scale-110 transition"
                />

                <FaGithub
                  title="GitHub"
                  className="text-gray-800 hover:scale-110 transition"
                />

                <SiNpm
                  title="NPM"
                  className="text-red-600 hover:scale-110 transition"
                />

                <SiWebpack
                  title="Webpack"
                  className="text-blue-500 hover:scale-110 transition"
                />

                <SiVite
                  title="Vite"
                  className="text-purple-500 hover:scale-110 transition"
                />

                <FaTools
                  title="Development Tools"
                  className="text-gray-600 hover:scale-110 transition"
                />
              </div>
            </FadeInSection>
          </div>

          {/* API & Communication */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              API & Communication
            </h2>

            <FadeInSection direction="right">
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                  RESTful APIs
                </span>

                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
                  MQTT
                </span>

                <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
                  Socket.IO
                </span>

                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
                  WebSockets
                </span>
              </div>
            </FadeInSection>
          </div>

          {/* Methodologies */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Methodologies
            </h2>

            <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                Agile / Scrum
              </span>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                RESTful APIs
              </span>

              <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
                Real-Time Communication
              </span>

              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
                Full Stack Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

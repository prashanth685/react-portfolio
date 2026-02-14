import React from "react";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiDivideFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiVite, SiMongodb } from "react-icons/si";
import FadeInSection from "./FadeInSection";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6 md:px-20">
      <FadeInSection direction="up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#27CBCB] inline-block pb-2">
            Projects
          </h1>

          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Industrial Monitoring IoT Based Web Application
            </h2>

            <div className="flex justify-between text-gray-500 text-sm mt-2">
              <p>Jan 2025</p>
              <p>Present</p>
            </div>

            <div className="mt-6 text-gray-600 space-y-3 list-disc list-inside leading-relaxed">
              Developed real-time dashboards for vibration monitoring systems
              using MQTT and WebSocket data streams, enabling low-latency
              (100ms) visualization of high-frequency sensor data Implemented
              live plotting with TradingView's Charting Library, optimized for
              smooth rendering of 10,000+ data points/second with minimal CPU
              utilization Integrated REST APIs and MQTT pipelines within a MERN
              stack architecture, collaborating with backend engineers to
              establish reliable data flow Optimized frontend performance using
              React.memo, WebSocket connection management, and efficient state
              updates, reducing UI lag by 40% Designed threshold-based alert
              interfaces for real-time anomaly detection, enabling instant
              notifications for critical vibration events Built responsive,
              scalable UI components for industrial IoT applications with
              mobile-first design approach
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Tech Stack Used
              </h3>

              <div className="flex flex-wrap gap-6 text-4xl">
                <FaBootstrap className="text-purple-600 hover:scale-110 transition" />
                <RiTailwindCssFill className="text-sky-500 hover:scale-110 transition" />
                <FaReact className="text-cyan-500 hover:scale-110 transition" />
                <SiRedux className="text-purple-500 hover:scale-110 transition" />
                <SiVite className="text-violet-500 hover:scale-110 transition" />
                <SiMongodb className="text-green-600 hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;

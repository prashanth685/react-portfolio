import React from "react";
import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiVite,
  SiMongodb,
  SiSocketdotio,
  SiNodedotjs,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import FadeInSection from "./FadeInSection";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6 md:px-20">
      <FadeInSection direction="up">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 border-b-4 border-[#27CBCB] inline-block pb-2">
            Projects
          </h1>

          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Industrial Monitoring IoT Based Web Application
                </h2>

                <p className="text-[#27CBCB] font-medium mt-2">
                  Industrial IoT • Real-Time Monitoring
                </p>
              </div>

              <div className="text-gray-500 text-sm md:text-right">
                <p>Mar 2024 – Aug 2025</p>
                <span className="inline-block mt-1 bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Developed real-time industrial monitoring dashboards for
                  vibration monitoring systems using MQTT and WebSocket data
                  streams.
                </li>

                <li>
                  Implemented low-latency visualization of high-frequency sensor
                  data, enabling real-time monitoring with response times of
                  approximately 100ms.
                </li>

                <li>
                  Integrated TradingView's Charting Library for live data
                  visualization and optimized chart rendering for large datasets
                  containing 10,000+ data points per second.
                </li>

                <li>
                  Integrated REST APIs and MQTT pipelines within a MERN-based
                  architecture to establish reliable communication between
                  frontend, backend, and industrial sensors.
                </li>

                <li>
                  Optimized React application performance using React.memo,
                  efficient state updates, and WebSocket connection management,
                  reducing UI lag by approximately 40%.
                </li>

                <li>
                  Developed threshold-based alert interfaces for detecting
                  abnormal vibration patterns and displaying critical events in
                  real time.
                </li>

                <li>
                  Designed reusable and responsive UI components following a
                  mobile-first approach for industrial monitoring applications.
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Tech Stack Used
              </h3>

              <div className="flex flex-wrap gap-6 text-4xl">
                <FaReact
                  title="React.js"
                  className="text-cyan-500 hover:scale-110 transition"
                />

                <SiRedux
                  title="Redux"
                  className="text-purple-500 hover:scale-110 transition"
                />

                <SiNodedotjs
                  title="Node.js"
                  className="text-green-600 hover:scale-110 transition"
                />

                <SiMongodb
                  title="MongoDB"
                  className="text-green-700 hover:scale-110 transition"
                />

                <SiSocketdotio
                  title="Socket.IO"
                  className="text-gray-900 hover:scale-110 transition"
                />

                <SiVite
                  title="Vite"
                  className="text-violet-500 hover:scale-110 transition"
                />

                <RiTailwindCssFill
                  title="Tailwind CSS"
                  className="text-sky-500 hover:scale-110 transition"
                />

                <FaBootstrap
                  title="Bootstrap"
                  className="text-purple-600 hover:scale-110 transition"
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  React ECharts
                </span>

                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Socket.IO
                </span>

                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  Real-Time Data
                </span>

                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  REST APIs
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Smart Sensor
                </h2>

                <p className="text-[#27CBCB] font-medium mt-2">
                  Smart Monitoring • Real-Time Data Visualization
                </p>
              </div>

              <div className="text-gray-500 text-sm md:text-right">
                <p>Aug 2025 – Present</p>

                <span className="inline-block mt-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                  In Progress
                </span>
              </div>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Developing a real-time Smart Sensor monitoring application
                  capable of receiving and displaying data from multiple sensors
                  simultaneously.
                </li>

                <li>
                  Implemented Socket.IO-based real-time communication to receive
                  continuous sensor data and update the application without
                  requiring manual page refreshes.
                </li>

                <li>
                  Designed dynamic dashboards to display multiple sensor
                  parameters and their current status in real time.
                </li>

                <li>
                  Integrated Apache ECharts to create interactive charts,
                  gauges, and visual representations of live sensor readings.
                </li>

                <li>
                  Developed real-time gauge components to provide an
                  easy-to-understand visualization of sensor values, thresholds,
                  and operating conditions.
                </li>

                <li>
                  Implemented dynamic data handling for multiple sensor streams
                  while maintaining responsive and smooth dashboard performance.
                </li>

                <li>
                  Working on report generation and download functionality,
                  allowing users to export sensor data and monitoring reports
                  for further analysis.
                </li>

                <li>
                  Developing reusable React components and scalable frontend
                  architecture to support additional sensors and monitoring
                  features.
                </li>

                <li>
                  Continuously improving the application's real-time data
                  handling, visualization, reporting, and overall user
                  experience as the project progresses.
                </li>
              </ul>
            </div>

            {/* Current Status */}
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
              <h3 className="font-semibold text-yellow-700">Project Status</h3>

              <p className="text-sm text-yellow-700 mt-1 leading-relaxed">
                This project is currently under active development. Real-time
                sensor communication, dashboard visualization, gauges, and
                reporting features are being developed and enhanced
                incrementally.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Tech Stack Used
              </h3>

              <div className="flex flex-wrap gap-6 text-4xl">
                <FaReact
                  title="React.js"
                  className="text-cyan-500 hover:scale-110 transition"
                />

                <SiRedux
                  title="Redux"
                  className="text-purple-500 hover:scale-110 transition"
                />

                <SiNodedotjs
                  title="Node.js"
                  className="text-green-600 hover:scale-110 transition"
                />

                <SiSocketdotio
                  title="Socket.IO"
                  className="text-gray-900 hover:scale-110 transition"
                />

                <SiMongodb
                  title="MongoDB"
                  className="text-green-700 hover:scale-110 transition"
                />

                <SiVite
                  title="Vite"
                  className="text-violet-500 hover:scale-110 transition"
                />

                <RiTailwindCssFill
                  title="Tailwind CSS"
                  className="text-sky-500 hover:scale-110 transition"
                />
              </div>

              {/* Additional Technologies */}
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  Apache ECharts
                </span>

                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Socket.IO
                </span>

                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  Real-Time Data
                </span>

                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;

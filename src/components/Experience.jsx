import React from "react";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16 md:px-20">
      <FadeInSection direction="left">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b-4 border-[#27CBCB] inline-block pb-2">
            Experience
          </h1>
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300 ">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sarayu Infotech Solutions Private Limited
            </h2>
            <h3 className="text-lg text-[#27CBCB]  font-medium mt-1">
              Software Developer
            </h3>
            <p>Bengaluru</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm mt-2">
              <p>Start Date:Mar 2024</p>
              <p>Present</p>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Energetic and detail-oriented Full Stack Developer with 2+ years
              of professional experience designing, developing, and maintaining
              responsive, scalable, and user-centric web applications.
              Experienced in building modern frontend applications using React,
              JavaScript, HTML5, CSS3, and Tailwind CSS, along with developing
              robust backend services and RESTful APIs. Proficient in
              component-based architecture, state management, API integration,
              server-side development, database management, authentication,
              authorization, and application performance optimization.
              Experienced in working with backend technologies such as Node.js
              and Express.js, developing secure and scalable APIs, handling
              server-side business logic, and integrating applications with
              relational and NoSQL databases. Strong understanding of full-stack
              application architecture, including frontend-to-backend
              communication, CRUD operations, data validation, error handling,
              authentication workflows, and database operations. Familiar with
              Git and GitHub for version control and collaborative development,
              and comfortable working in Agile environments with
              cross-functional teams. Passionate about writing clean,
              maintainable, reusable, and scalable code while continuously
              learning modern technologies and best practices. Able to translate
              business requirements and UI/UX designs into complete end-to-end
              applications, from responsive frontend interfaces to backend APIs
              and database integration.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;

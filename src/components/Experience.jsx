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
              <p>Start Date:Jan 2025</p>
              <p>Present</p>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Energetic and detail-oriented Frontend Developer with 1+ year of
              professional experience building responsive, user-centric web
              applications. Proficient in modern JavaScript frameworks (React),
              HTML5, CSS3, and state management. Proven ability to translate
              UI/UX designs into functional, high-performance code and
              collaborate effectively within Agile teams. Seeking to contribute
              technical skills and a passion for clean code to a dynamic
              development team.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;

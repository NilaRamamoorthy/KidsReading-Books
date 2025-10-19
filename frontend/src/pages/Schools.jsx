import React, { useEffect, useState } from "react";
import axios from "axios";

export default function School() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [intro, setIntro] = useState(null);
  const [roles, setRoles] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    document.body.classList.add("bg-[#03194F]", "text-white");
    return () => {
      document.body.classList.remove("bg-[#03194F]", "text-white");
    };
  }, []);

  useEffect(() => {
    // Fetch all section data
    axios.get(`${API_BASE_URL}/api/school-intro/`)
      .then(res => setIntro(res.data))
      .catch(err => console.error("Error fetching intro section:", err));

    axios.get(`${API_BASE_URL}/api/school-page/`)
      .then(res => {
        setRoles(res.data.roles);
        setSteps(res.data.steps);
      })
      .catch(err => console.error("Error fetching school page data:", err));
  }, []);

  return (
    <div className="font-sans">

      {/* Section 1 – Guest Reader Program */}
      {intro && (
        <section className=" text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
          {/* Left Text */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              {intro.title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">
              {intro.description}
            </p>
            {/* <p className="text-sm mb-6 font-semibold">
              FREE for Teachers & Volunteers
            </p> */}
          
              <a
                href={intro.button_link}
                className="inline-block bg-[#ff7f2a] text-white px-6 py-3 rounded font-bold hover:bg-[#e46c1e] transition"
              >
                {intro.button_text}
              </a>
          
          </div>

          {/* Right Video */}
          <div className="md:w-2/3 flex justify-center">
            {intro.video && (
              <video
                src={`${API_BASE_URL}${intro.video}`}
                controls
                className="w-full max-w-xl rounded-lg shadow-lg"
              />
            )}
          </div>
        </section>
      )}

      {/* Section 2 – Roles */}
      <section className="bg-[#001b57] text-white px-4 py-12 md:px-20">
        <h2 className="text-center text-4xl font-bold mb-25">
          How will You Use the program?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {roles.map((role, index) => (
            <div key={index} className="relative w-full max-w-sm flex flex-col">
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-10">
                <div className="rounded-full border-[10px] border-[#03194F] overflow-hidden w-28 h-28 transition-transform duration-300 hover:scale-110">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="bg-white text-[#001b57] p-6 rounded-xl text-center shadow-md pt-20 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-lg">{role.title}</h3>
                  <p className="text-sm mt-2 mb-4">{role.description}</p>
                </div>
                <a
                  href={role.button_link}
                  className="inline-block bg-[#ff7f2a] text-white px-4 py-2 rounded font-bold hover:bg-[#e46c1e] transition"
                >
                  {role.button_text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 – Steps */}
      <section className="bg-white text-[#001b57] px-4 py-12 md:px-20">
        <h2 className="text-center text-3xl font-bold mb-10">
          Getting started is easy as 1-2-read!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="font-bold text-sm bg-[#001b57] text-white px-3 py-1 rounded mb-3">
                STEP {step.step_number}
              </div>
              <img
                src={step.image}
                alt={step.title}
                className="w-50 h-50 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

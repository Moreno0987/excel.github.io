"use client";
import React, { useState } from "react";

const testimonials = [
  {
    message:
      "It was a pleasure working with you! Your designs were top-notch, and the development process was smooth. We are beyond satisfied with the results. Looking forward to future collaborations!",
    name: "Ethan Howard",
    position: "Managing Director - ABC Company",
  },
  {
    message:
      "Very professional and highly skilled! The project exceeded our expectations in both design and performance.",
    name: "Sophia Lee",
    position: "CEO - Creative Minds",
  },
  {
    message:
      "The communication was great throughout the process, and the result was exactly what we were looking for!",
    name: "Michael Chen",
    position: "Product Manager - BrightTech",
  },
  {
    message:
      "Amazing experience! The website looks stunning and works perfectly across all devices.",
    name: "Alicia Ramos",
    position: "Marketing Head - EcoStyle",
  },
  {
    message:
      "Fast, reliable, and truly creative. Would definitely recommend your services to others!",
    name: "Daniel Kim",
    position: "Founder - StartUpPro",
  },
];

const Happy: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { message, name, position } = testimonials[index];

  return (
    <>
      {/* Happy Clients Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900">Happy Clients</h2>
        <p className="text-lg text-gray-700 mt-2">
          I have worked with many great companies and brands.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            "Google",
            "Dribbble",
            "LinkedIn",
            "Amazon",
            "Medium",
            "Spotify",
          ].map((client, index) => (
            <span
              key={index}
              className="text-gray-700 text-lg font-semibold opacity-80 hover:opacity-100 transition"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-gradient-to-b from-gray-100 via-white to-purple-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Testimonial</h2>
        <p className="text-lg text-gray-700 mt-2">
          What my clients say about me.
        </p>

        <div className="mt-10 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600 transition duration-300 ease-in-out">
          <p className="text-lg text-gray-700 italic mb-4">"{message}"</p>
          <p className="text-lg font-semibold text-gray-900">{`- ${name}`}</p>
          <span className="text-gray-500">{position}</span>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Happy;

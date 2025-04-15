import React from "react";
import Image from "next/image"; // Import Image from Next.js


const Portfolio: React.FC = () => {
  return (
    <>
      <section
        className="bg-gradient-to-b from-gray-100 via-yellow-100 to-white py-16 px-6 md:px-20 lg:px-40"
        style={{ background: "oklch(86.9% 0.005 56.366)" }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">My Portfolio</h2>
          <p className="text-lg text-gray-700 mt-2">
            Some of my best projects that showcase my skills.
          </p>
        </div>

        {/* Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image - Ganti dengan komponen <Image /> dari Next.js */}
              <Image
                src={`/Gambar${num}.png`}
                alt={`Project ${num}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <span className="text-sm text-gray-500 uppercase">
                  UI-UX Design
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  Product Admin Dashboard
                </h3>
                <p className="text-base text-gray-700 mt-1">
                  Vivamus eleifend convallis ante, non pharetra libero molestie
                  laoreet. Donec id imperdiet lacus.
                </p>

                {/* Case Study Button */}
                <button className="flex items-center gap-2 mt-4 px-4 py-2 text-yellow-600 font-semibold border border-yellow-500 rounded-lg hover:bg-yellow-100 transition">
                  Case Study <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-10">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-700 transition">
            More Project
          </button>
        </div>
      </section>

      {/* Project Discussion Section */}
      <section className="bg-gray-900 text-white py-16 text-center px-6 md:px-20 lg:px-40">
        <h2 className="text-3xl font-bold">Do you have a Project Idea?</h2>
        <p className="text-lg mt-2">Let's discuss your project!</p>
        <p className="text-gray-400 mt-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md">
          Let's work together
        </button>
      </section>
    </>
  );
};

export default Portfolio;

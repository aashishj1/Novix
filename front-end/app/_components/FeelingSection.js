// components/FeelingSection.jsx
import React from "react";

const benefits = [
  {
    title: "Benefit 1",
    description: "Description on benefit in small 10-25 words.",
  },
  {
    title: "Benefit 2",
    description: "Description on benefit in small 10-25 words.",
  },
  {
    title: "Benefit 3",
    description: "Description on benefit in small 10-25 words.",
  },
];

const FeelingSection = () => {
  return (
    <section className="bg-pink-100 rounded-xl p-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Not Sure How You're Feeling?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            <div className="bg-white p-4 rounded-full mb-4 shadow-md">
              {/* Lightbulb icon (you can replace with an SVG or icon library) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3v2m0 0a3 3 0 00-3 3v1a3 3 0 003 3v2m0-7h4m-4 0H7m8 0h2m-2 0v2m0 0h2m-2-2v-2"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
          Consult
        </button>
        <button className="border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-100 transition flex items-center gap-2">
          View Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeelingSection;

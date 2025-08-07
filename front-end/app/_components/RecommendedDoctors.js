import Image from "next/image";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const doctors = [
  {
    name: "Dr. Amerjeet Singh",
    title: "Depression Expert",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    badge: "High Demand",
  },
  {
    name: "Dr. Ritu Sharma",
    title: "Psychologist",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Sneha Verma",
    title: "Psychologist",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const RecommendedDoctors = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-6 py-12">
      {/* Left Card */}
      <div className="bg-[#053F23] text-white rounded-[32px] p-6 w-full max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recommended</h2>
          <ToggleSwitch />
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-[#F7F5F1] text-black rounded-2xl p-4 shadow-md flex flex-col items-center text-center relative"
            >
              {/* Badge */}
              {doc.badge && (
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {doc.badge}
                </span>
              )}

              {/* Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              {/* Name & Info */}
              <h3 className="font-semibold text-sm">{doc.name}</h3>
              <p className="text-xs text-gray-600">{doc.title}</p>
              <div className="text-[11px] text-gray-500 mt-1 leading-snug">
                {doc.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>

              {/* Price & Rating */}
              <div className="flex justify-between items-center w-full text-xs mt-2">
                <span className="text-gray-700">{doc.price}</span>
                <span className="text-pink-500">
                  {doc.rating}{" "}
                  <span className="text-gray-400">({doc.reviews})</span>
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="bg-[#0F2C24] text-white px-4 py-1 text-sm rounded-full">
                  Consult
                </button>
                <button className="border border-gray-300 px-4 py-1 text-sm rounded-full flex items-center gap-1">
                  View Profile <span className="rotate-45">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right 3D Character */}
      <div className="hidden lg:block">
        <Image
          src="/doctor-cartoon.png"
          alt="3D Doctor"
          width={200}
          height={600}
          className="h-[700px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default RecommendedDoctors;

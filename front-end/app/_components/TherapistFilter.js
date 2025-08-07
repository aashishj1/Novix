"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["New", "Trending", "Top Rated"];

const therapists = new Array(6).fill({
  name: "Dr. Amerjeet Singh",
  specialty: "Relationship Expert",
  rating: "4.8/5",
  reviews: 320,
  image: "https://randomuser.me/api/portraits/men/75.jpg",
});

export default function TherapistFilter() {
  const [activeTab, setActiveTab] = useState("New");

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <div className="bg-[#0F2C24] text-white w-full max-w-[250px] p-6 rounded-r-[32px] flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Therapist</h1>

        {/* Search Input */}
        <div className="relative mt-4">
          <input
            placeholder="hinted search text"
            className="w-full px-4 py-2 rounded-full text-black placeholder:text-gray-400"
          />
          <span className="absolute right-3 top-2.5 text-pink-500">🔍</span>
        </div>

        {/* Price Slider */}
        <div className="text-sm mt-4">
          <label className="block mb-2">Price</label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full accent-pink-500"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>

        {/* Dropdowns */}
        {["State", "Language", "Specialization"].map((label) => (
          <div key={label}>
            <label className="text-sm mb-1 block">{label}</label>
            <select className="w-full text-white px-3 py-2 rounded-md">
              <option value="">{label}</option>
            </select>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Tabs */}
        <div className="flex gap-6 text-lg font-semibold mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-4 ${
                activeTab === tab
                  ? "text-black border-[#0F2C24]"
                  : "text-gray-400 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {therapists.map((doc, idx) => (
            <div
              key={idx}
              className="bg-[#0F2C24] text-white rounded-xl p-4 shadow-md flex flex-col items-center text-center border-2 border-[#0F2C24]"
            >
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              {/* Name & Info */}
              <h3 className="font-semibold text-base">{doc.name}</h3>
              <p className="text-sm text-gray-300">{doc.specialty}</p>
              <p className="text-xs text-gray-400 mt-1">
                {doc.rating} ({doc.reviews})
              </p>

              {/* Availability Badge */}
              {idx === 0 && (
                <span className="mt-2 text-[10px] bg-white text-pink-600 px-2 py-0.5 rounded-full font-bold">
                  AVAILABLE TODAY
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

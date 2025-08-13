"use client";

import Image from "next/image";
import { useState } from "react";

export default function SessionSuggestion({ suggestions }) {
  const [selected, setSelected] = useState("couple");

  return (
    <div className="flex gap-9 p-6 items-start max-w-4xl mx-auto">
      {/* Continue Previous Card */}
      <div className="w-64 h-72 bg-[#FEEFEF] rounded-3xl p-4 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative right-[70px]">
        <div>
          <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
            Continue Previous
          </p>
        </div>
        <div className="flex-1 relative w-full h-40 my-3 rounded-2xl overflow-hidden bg-white/50">
          <Image
            src="/couple.jpg"
            alt="Couple session preview"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-1">
          <p className="text-lg font-bold text-gray-800">Couple</p>
          <p className="text-xs text-gray-500">Last session: 2 days ago</p>
        </div>
      </div>

      {/* Suggestion Cards */}
      <div className="bg-[#0F2C24] rounded-3xl px-6 py-5 flex-1 shadow-lg h-64">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white text-xl font-bold tracking-wide">
            Suggestions
          </h2>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="flex gap-6 justify-start">
          {suggestions.map((s) => (
            <button
              key={s.label}
              onClick={() => setSelected(s.label)}
              className={`group w-36 h-36 rounded-2xl p-3 flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selected === s.label
                  ? "ring-4 ring-blue-400 ring-offset-2 ring-offset-[#0F2C24] bg-white shadow-xl scale-105"
                  : "bg-white/95 hover:bg-white shadow-md"
              }`}
            >
              <div className="relative w-18 h-18 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={`${s.label} session type`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <p
                  className={`text-sm font-semibold capitalize transition-colors duration-200 ${
                    selected === s.label
                      ? "text-blue-600"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {s.label}
                </p>
                {selected === s.label && (
                  <div className="w-4 h-0.5 bg-blue-400 rounded-full mx-auto mt-1"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

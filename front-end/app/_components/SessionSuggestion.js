'use client';

import Image from "next/image";

export default function SessionSuggestion({ suggestions }) {
  return (
    // Added mt-10 (margin-top) to prevent overlap
    <div className="flex justify-center items-center py-10 px-4 bg-white mt-30">
      <div className="w-full max-w-7xl flex gap-8 items-stretch">
        
        {/* --- 1. Continue Previous Card (Height is now h-[400px]) --- */}
        <div className="relative w-1/3 h-[400px] rounded-3xl overflow-hidden shadow-lg bg-[#FEF6F8]">
          <Image
            src={suggestions[0]?.image || "/couple-1.jpg"} 
            alt="Couple session preview"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-6 left-6 text-white">
            <p className="font-semibold text-5xl tracking-wide">Continue Previous</p>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-4xl font-bold">Couple</p>
          </div>
        </div>

        {/* --- 2. Suggestion Section (Height is now h-[400px]) --- */}
        <div className="w-2/3 h-[400px] bg-[#0F2C24] rounded-3xl p-8 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-5xl font-bold tracking-wide">
              Suggestions
            </h2>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6">
            {suggestions.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Image card now uses flex-grow to fill the available space */}
                <div className="relative w-full flex-grow rounded-2xl overflow-hidden mb-4 
                                transition-all duration-300 group-hover:scale-105 
                                group-hover:shadow-[0_0_25px_5px] group-hover:shadow-amber-400/50">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt={`${s.label} session type`}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <p className="text-white font-semibold capitalize text-3xl">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
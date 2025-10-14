'use client';

import Image from "next/image";

export default function ViewProfileButton() {
  return (
    <button 
      className="group flex items-center justify-center gap-2 p-4 w-44 rounded-full bg-white 
                 border-2 border-gray-300 text-gray-600 font-bold hover:border-green-900 
                 hover:text-green-900 transition-all duration-300 ease-in-out"
    >
      <span>View Profile</span>
      <div className="relative w-6 h-6">
        {/* Idle State Icon */}
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
          <Image src="/Circle-Top-Up--Streamline-Solar idea.svg" alt="Arrow icon" layout="fill" objectFit="contain" />
        </div>
        {/* Hover State Icon */}
        <div className="absolute inset-0 transition-all duration-1000 opacity-0 scale-50 group-hover:opacity-90 group-hover:scale-90">
          <Image src="/Circle-Top-Up--Streamline-Solar hover.svg" alt="Arrow icon on hover" layout="fill" objectFit="contain" />
        </div>
      </div>
    </button>
  );
}
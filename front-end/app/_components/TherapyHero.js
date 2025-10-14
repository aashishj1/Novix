import Image from "next/image";
import React from "react";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import ConsultButton from "./ConsultButton"; // <-- Import the new button component

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function TherapyHero({ title, para }) {
  const spilttedTitle = title.split(",");
  return (
    <div className="w-full px-4 pt-12 pb-4 text-center bg-white">
      {/* Headline */}
      <h1
        className={`text-5xl md:text-8xl font-bold leading-tight text-black uppercase ${plusJakartaSans.className}`}
      >
        {spilttedTitle[0]}
        <br />
        <span className="text-black uppercase">{spilttedTitle[1]}</span>
      </h1>

      {/* Subheading */}
      <p
        className={`mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-7 ${nunitoSans.className}`}
      >
        {para}
      </p>

      {/* Buttons and "20+ Therapy" text container */}
      <div className="relative">
        <div className={`flex gap-4 justify-center items-center mt-5 ${nunitoSans.className}`}>
          
          {/* --- Using the new ConsultButton component --- */}
          <ConsultButton />

          {/* --- Secondary "View Profile" Button --- */}
          <button 
            className="group flex items-center justify-center gap-2 p-4 w-44 rounded-full bg-white 
                       border-2 border-gray-300 text-gray-600 font-bold hover:border-green-900 
                       hover:text-green-900 transition-all duration-300 ease-in-out"
          >
            <span>View Profile</span>
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
                <Image src="/Circle-Top-Up--Streamline-Solar idea.svg" alt="Arrow icon" layout="fill" objectFit="contain" />
              </div>
              <div className="absolute inset-0 transition-all duration-1000 opacity-0 scale-50 group-hover:opacity-90 group-hover:scale-90">
                <Image src="/Circle-Top-Up--Streamline-Solar hover.svg" alt="Arrow icon on hover" layout="fill" objectFit="contain" />
              </div>
            </div>
          </button>
        </div>

        {/* "20+ Therapy" Text positioned below and to the left of the buttons */}
        <div className={`absolute left-0 right-0 mt-10  text-left left-[-40rem] top-[-69px]${nunitoSans.className}`}>
            <div className="max-w-xl mx-auto">
                 <p className="text-lg font-bold text-gray-400">20+ Therapy</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default TherapyHero;
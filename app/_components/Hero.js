'use client';

import Image from "next/image";
import React from "react";
import HeroHeading from "./HeroHeading"; // <-- Import the new heading component

function Hero() {
  return (
    <section className="bg-white text-center py-8 px-2 relative">
      
      {/* Title Section now uses the new component */}
      <HeroHeading />

      {/* Subtitle */}
      <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm md:text-base">
        Affordable, Personalized, Confidential, Support For Teens, Adults & Couples
      </p>

      {/* Illustration Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 mt-12">
        <div
          className="w-[340px] h-[97vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer"
        >
          <Image
            src="/meditate.jpg"
            alt="A cartoon character meditating"
            width={240}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-[340px] h-[97vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer">
          <Image
            src="/door.jpg"
            alt="A doctor welcoming a child"
            width={240}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-[340px] h-[97vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer">
          <Image
            src="/study.jpg"
            alt="A cartoon character studying"
            width={240}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
    </section>
  );
}

export default Hero;
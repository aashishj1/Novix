import Image from "next/image";
import React from "react";

function TherapyHero() {
  return (
    <div className="w-full px-4 py-12 text-center bg-white">
      {/* Headline */}
      <h1 className="text-3xl md:text-7xl font-extrabold leading-tight text-black uppercase">
        Find the right therapy
        <br />
        <span className="text-black uppercase">for your needs</span>
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
        Whether you&apos;re seeking guidance, healing, or support, explore the best
        therapy options tailored for you.{" "}
      </p>

      <div className="flex gap-4 justify-center items-center">
        <button className="bg-green-900 p-4 w-44 rounded-[50px]">
          Consult
        </button>
        <button className="bg-white p-4 w-44 rounded-[50px] border-2 text-gray-600">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default TherapyHero;

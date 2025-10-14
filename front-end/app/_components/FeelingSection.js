import Image from "next/image";
import React from "react";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import ConsultButton from "./ConsultButton";
import ViewProfileButton from "./ViewProfileButton";

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"], // Bold and Extrabold
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400"], // Regular weight
});

// Data for the benefits section
const benefits = [
  {
    title: "Benefit 1",
    description: "description on benefit in small 10-25 words.",
  },
  {
    title: "Benefit 2",
    description: "description on benefit in small 10-25 words.",
  },
  {
    title: "Benefit 3",
    description: "description on benefit in small 10-25 words.",
  },
];

export default function FeelingSection() {
  return (
    <section 
      className="bg-cover bg-center rounded-4xl my-10 mx-auto max-w-7xl py-16 px-10 text-center widht-[98%] "
      style={{ backgroundImage: "url('/feeling section pink.png')" }}
    >
      {/* Heading with Plus Jakarta Sans */}
      <h2 className={`text-5xl font-extrabold text-black mb-12 ${plusJakartaSans.className}`}>
        Not Sure How You&apos;re Feeling?
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <Image src="/bulb icon.svg" alt="Benefit Icon" width={40} height={40} />
            </div>
            {/* Benefit Title with Plus Jakarta Sans */}
            <h3 className={`font-bold text-2xl text-black mb-2 ${plusJakartaSans.className}`}>
              {benefit.title}
            </h3>
            {/* Benefit Description with Nunito Sans */}
            <p className={`text-sm text-gray-800 ${nunitoSans.className}`}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center gap-4">
        <ConsultButton />
        <ViewProfileButton />
      </div>
    </section>
  );
}
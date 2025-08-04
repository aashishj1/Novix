"use client";

import Image from "next/image";
import React from "react";
import { Londrina_Outline } from "next/font/google";

const londrina = Londrina_Outline({
  weight: "400", // some fonts don't need this, but add if available
  subsets: ["latin"], // or ["latin-ext"], depending on your need
});
const Home = () => {
  return (
    <main>
      {" "}
      <section className="bg-white text-center py-16 px-4">
        {/* Title */}
        <h1
          className={`${londrina.className} text-7xl  font-bold tracking-tight leading-tight  mx-auto text-black`}
        >
          TAKE CONTROL OF YOUR <br />
          MENTAL{" "}
          <span className="font-sans font-black text-black">WELLNESS</span> WITH
          <br />
          <span className="text-3xl md:text-4xl mt-2 inline-block font-bold tracking-widest">
            NOVIX
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Affordable, Personalized, Confidential, Support For Teens, Adults &
          Couples
        </p>

        {/* Illustration Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-11 mt-12">
          <div
            className="w-[240px] h-[71vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer"
            onMouseEnter={() => console.log("message")}
          >
            <Image
              src="/meditate.jpg"
              alt="Alt text"
              width={240}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[240px] h-[71vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer">
            <Image
              src="/door.jpg"
              alt="Alt text"
              width={240}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[240px] h-[71vh] overflow-hidden rounded-t-full shadow-lg transition-transform duration-300 hover:-translate-y-12 cursor-pointer">
            <Image
              src="/study.jpg"
              alt="Alt text"
              width={240}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from "react";
import Image from "next/image";
import RecommendedDoctors from "./RecommendedDoctors";

const LastDoctorCard = () => {
  return (
    <>
      <div className="flex items-center justify-center  bg-gray-50">
        <div className="max-w-4xl w-full rounded-[32px] bg-[#053F23] text-white p-8 flex items-center justify-between relative overflow-hidden shadow-lg custom-shape mx-7">
          {/* Left Section */}
          <div className="flex flex-col gap-3 w-[65%]">
            <h2 className="font-medium text-white text-2xl">
              YOUR LAST DOCTOR
            </h2>
            <h3 className="text-2xl font-bold text-white">
              Dr. Amerjeet Singh
            </h3>
            <p className="text-base text-gray-300 leading-snug">
              Relationship Expert <br />
              Anxiety, Depression, OCD <br />
              10+ Years Experience
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-base">₹500/session</span>
              <span className="text-base text-pink-400">
                4.8/5 <span className="text-gray-500 text-sm">(320)</span>
              </span>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <button className="bg-[#173E33] text-white px-7 py-3 rounded-full font-semibold shadow-inner">
                Consult
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-full text-base flex items-center gap-2 shadow">
                View Profile{" "}
                <span className="inline-block rotate-45 text-pink-500">↗</span>
              </button>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className="w-[30%] flex justify-end">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Doctor"
                width={160}
                height={180}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <RecommendedDoctors />
    </>
  );
};
export default LastDoctorCard;

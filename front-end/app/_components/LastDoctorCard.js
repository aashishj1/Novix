import React from "react";
import Image from "next/image";
import RecommendedDoctors from "./RecommendedDoctors";

const LastDoctorCard = () => {
  return (
    <>
      <div className="">
        
        <div className="max-w-3xl w-full rounded-[32px] bg-[#0F2C24] text-white p-6 flex items-center justify-between relative overflow-hidden shadow-md custom-shape mx-7">
          {/* Left Section */}
          <div className="flex flex-col gap-2 w-[65%]">
            <h2 className="text-sm font-medium text-white">YOUR LAST DOCTOR</h2>
            <h3 className="text-xl font-bold text-white">Dr. Amerjeet Singh</h3>

            <p className="text-sm text-gray-300 leading-snug">
              Relationship Expert <br />
              Anxiety, Depression, OCD <br />
              10+ Years Experience
            </p>

            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">₹500/session</span>
              <span className="text-sm text-pink-400">
                4.8/5 <span className="text-gray-500 text-xs">(320)</span>
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button className="bg-[#173E33] text-white px-6 py-2 rounded-full font-semibold shadow-inner">
                Consult
              </button>
              <button className="bg-white text-black px-5 py-2 rounded-full text-sm flex items-center gap-2 shadow">
                View Profile{" "}
                <span className="inline-block rotate-45 text-pink-500">↗</span>
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-[30%] flex justify-end">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Doctor"
                width={120}
                height={140}
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

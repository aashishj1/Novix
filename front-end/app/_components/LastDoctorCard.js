import React from "react";
import ConsultButton from "./ConsultButton";
import ViewProfileButton from "./ViewProfileButton";

const LastDoctorCard = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading - Outside the card */}
        <div className="mb-[-20px] ml-12 relative z-10">
          <h2
            className="text-black font-extrabold text-2xl tracking-wide inline-block bg-gray-50 pr-8"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
          >
            YOUR LAST DOCTOR
          </h2>
        </div>

        {/* Main Card */}
        <div className="relative bg-[#0a4d2e] text-white rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[120px] shadow-2xl overflow-hidden">
          <div className="flex justify-between items-stretch p-10">
            
            {/* Left Content Section */}
            <div className="w-[55%] pr-8">
              <h3
                className="text-5xl leading-tight"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 400 }}
              >
                Dr. Amerjeet Singh
              </h3>

              {/* Grid Section */}
              <div
                className="grid grid-cols-2 gap-6 ml-5 mt-5 text-lg leading-relaxed"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                {/* Column 1 - Description */}
                <div className="space-y-2">
                  <p className="font-semibold text-white">Relationship Expert</p>
                  <p className="text-gray-200">Anxiety, Depression, OCD</p>
                  <p className="text-gray-200">10+ Years Experience</p>
                </div>

                {/* Column 2 - Consultation Details */}
                <div className="space-y-2">
                  <p className="font-semibold text-white text-xl">₹500/session</p>
                  <p className="font-semibold text-pink-300 text-xl">
                    4.8/5{" "}
                    <span className="text-gray-300 text-base ml-1">(320)</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-20 ml-5">
                <ConsultButton />
                <ViewProfileButton />
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-[40%] flex justify-end">
              <div className="bg-[#FFF8C7] rounded-3xl shadow-xl">
                <img
                  src="/Rectangle 174.png"
                  alt="Dr. Amerjeet Singh"
                  className="w-[380px] h-[350px] object-cover object-top rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LastDoctorCard;

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const page = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // allow only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (index < 3) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 4).split("");
    const newOtp = [...otp];
    for (let i = 0; i < 4; i++) {
      newOtp[i] = pasted[i] || "";
    }
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length - 1, 3)]?.focus();
  };

  return (
    <div className="flex h-screen font-['Nunito_Sans'] bg-[#F2ECE2]">
      {/* Left Image Section */}
      <div className="flex flex-col justify-between px-10 py-8 w-1/2 relative">
        <div>
          <h1 className="text-6xl font-extrabold text-black">Novix</h1>
          <p className="text-sm text-gray-700 ml-1 mt-1">your own platform</p>
          <div className="w-44 h-1 bg-gray-300 mt-1 ml-1"></div>
        </div>

        <div className="relative w-full h-[600px]">
          <Image
            src="/try.png"
            alt="Character"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* OTP Form Section */}
      <div className="w-1/2 flex justify-center items-center ">
        <div className="bg-white rounded-3xl p-8 shadow-md w-[400px] text-center">
          <h2 className="text-3xl font-bold mb-4">
            Enter The <br /> OTP
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            We sent the OTP code via email to <br />
            <span className="text-gray-800 font-medium">
              Rafigididaw123@gmail.com
            </span>
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-between gap-4 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 border border-gray-400 text-center text-xl rounded-md focus:outline-none focus:border-black"
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-around gap-4">
            <button className="border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm flex items-center gap-1">
              Change Password <span className="text-lg">➤</span>
            </button>
            <button className="bg-green-200 px-4 py-2 rounded-full hover:bg-green-300 transition text-sm flex items-center gap-1">
              Sign-In <span className="text-lg">➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";

const ReachOut = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Left pink bar */}
      <div className="absolute top-0 left-0 w-2 bg-pink-300 h-full"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center w-full">
        {/* Text */}
        <div
          className="text-center z-10 font-extrabold text-5xl md:text-6xl lg:text-8xl text-green-900 tracking-wide"
          style={{
            fontFamily: "cursive",
            textShadow: "2px 2px 0 #00000010",
            whiteSpace: "pre-line",
            lineHeight: "1.2",
          }}
        >
          DON'T{"\n"}HESITATE{"\n"}TO REACH{"\n"}OUT
        </div>

        {/* Full-width Semi-circle Face */}
        <div className="relative w-[90%] h-[300px] mt-[-40px] overflow-hidden rounded-t-[100%] border-t-[3px] border-x-[3px] border-black bg-[#e12473] flex justify-center">
          {/* Eyes */}
          <div className="absolute top-[70px] left-[calc(50%-80px)] w-[50px] h-[70px] bg-white rounded-full border border-black flex items-center justify-center">
            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
          </div>
          <div className="absolute top-[70px] left-[calc(50%+30px)] w-[50px] h-[70px] bg-white rounded-full border border-black flex items-center justify-center">
            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;

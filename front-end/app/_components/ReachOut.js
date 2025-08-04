// ReachOut.jsx
import React from 'react';

const ReachOut = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Left pink bar */}
      <div className="absolute top-0 left-0 w-2 bg-pink-300 h-full"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Text */}
        <div className="text-center z-10 font-extrabold text-4xl md:text-5xl lg:text-6xl text-green-900 tracking-wide" style={{ 
          fontFamily: 'cursive',
          textShadow: '2px 2px 0 #00000010',
          whiteSpace: 'pre-line',
          lineHeight: '1.2',
        }}>
          DON'T{"\n"}HESITATE{"\n"}TO REACH{"\n"}OUT
        </div>

        {/* Face */}
        <div className="relative w-[400px] h-[200px] mt-[-30px] overflow-hidden rounded-t-full border-[3px] border-black bg-[#e12473]">
          {/* Eyes */}
          <div className="absolute left-[110px] top-[50px] w-[40px] h-[60px] bg-white rounded-full border border-black flex items-center justify-center">
            <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
          </div>
          <div className="absolute left-[240px] top-[50px] w-[40px] h-[60px] bg-white rounded-full border border-black flex items-center justify-center">
            <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;

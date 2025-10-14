'use client';

import { useState, useEffect } from 'react';
import { Rubik_Bubbles } from 'next/font/google';

const rubik = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
});

export default function ReachOut() {
  const [pupilTransform, setPupilTransform] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 5;

      // Limit the pupil movement
      const pupilX = x * 10;
      const pupilY = y * 10;

      setPupilTransform(`translate(${pupilX}px, ${pupilY}px)`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#FDF2F8] overflow-hidden">
  
      {/* Heading - Now positioned absolutely for precise control */}
      <div
        className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 ${rubik.className}`}
      >
        <h1
          className="text-7xl md:text-8xl font-extrabold text-[#053F23] tracking-wide"
          style={{
            whiteSpace: "pre-line",
            lineHeight: "1.2",
          }}
        >
          <br></br>
          DON&apos;T{"\n"}HESITATE{"\n"}TO REACH{"\n"}OUT
        </h1>
      </div>

      {/* Semicircle Character - Positioned at the bottom */}
      <div
        className="relative bottom-0 w-[120vw] h-[60vw] max-w-[1500px] max-h-[750px] rounded-t-full border-t-4 border-x-4 border-black bg-[#DB2768] mt-[300px]"
      >
        {/* Eyes Container */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 flex gap-20">
          {/* Left Eye */}
          <div className="w-28 h-28 bg-white rounded-full border-4 border-black flex items-center justify-center">
            <div
              className="w-14 h-14 bg-black rounded-full transition-transform duration-100 ease-out"
              style={{ transform: pupilTransform }}
            ></div>
          </div>
          {/* Right Eye */}
          <div className="w-28 h-28 bg-white rounded-full border-4 border-black flex items-center justify-center">
            <div
              className="w-14 h-14 bg-black rounded-full transition-transform duration-100 ease-out"
              style={{ transform: pupilTransform }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
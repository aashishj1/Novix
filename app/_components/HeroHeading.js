'use client';

import { Alumni_Sans } from 'next/font/google';

// Initialize the Plus Jakarta Sans font
const plusJakartaSans = Alumni_Sans({
  subsets: ['latin'],
  weight: ['900'], // extrabold
});

export default function HeroHeading() {
  return (
    <div className={`relative ${plusJakartaSans.className} mb-4`}>
      <h1
        className="text-7xl md:text-8xl font-extrabold tracking-tight leading-tight uppercase"
        style={{
          color: 'transparent',
          WebkitTextStroke: '2px black',
          textStroke: '2px black',
        }}
      >
        <span>Take Control of Your</span>
        <br />
        <span>Mental </span>
        <span className="relative inline-block">
          {/* Pink circular gradient background */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(252, 165, 165, 0.5) 0%, rgba(251, 207, 232, 0.3) 50%, transparent 70%)',
            }}
          ></span>
          {/* The word "Wellness" with solid black fill */}
          <span
            className="font-extrabold"
            style={{
              color: 'black',
              WebkitTextStroke: '0px',
              textStroke: '0px',
            }}
          >
            Wellness
          </span>
        </span>
        <span> with</span>
        <br />
        <span>Novix</span>
      </h1>

      <style jsx>{`
        /* Fallback for browsers that don't support the text-stroke effect */
        @supports not (-webkit-text-stroke: 2px black) {
          h1, h1 span {
            color: black;
            -webkit-text-stroke: 0px;
            text-stroke: 0px;
          }
          h1 span.font-extrabold {
             color: black;
          }
        }
      `}</style>
    </div>
  );
}
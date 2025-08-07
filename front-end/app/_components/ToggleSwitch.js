"use client";
import { useState } from "react";

export default function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-[92px] h-[42px]">
      <input
        type="checkbox"
        className="appearance-none absolute w-full h-full z-10 cursor-pointer"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 292 142"
        className="w-full h-full"
      >
        {/* Background shape */}
        <path
          d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
          className={`transition-colors duration-400 ${
            checked ? "fill-[#1868e3]" : "fill-[#d3d3d6]"
          }`}
        />

        {/* Gooey circles */}
        <g filter="url(#goo)">
          <rect
            fill={`${checked ? "#000" : "#fff"}`}
            rx="29"
            height="58"
            width="116"
            y="42"
            x="13"
            className={`transition-transform duration-700 origin-center ${
              checked ? "translate-x-[150px]" : ""
            }`}
          />
          <rect
            fill="#fff"
            rx="58"
            height="114"
            width="114"
            y="14"
            x="14"
            className={`transition-transform duration-500 ${
              checked ? "scale-0" : "scale-100"
            }`}
          />
          <rect
            fill="#fff"
            rx="58"
            height="114"
            width="114"
            y="14"
            x="164"
            className={`transition-transform duration-500 ${
              checked ? "scale-100" : "scale-0"
            }`}
          />
        </g>

        {/* OUTSIDE THE FILTER! */}
        <text
          x="50"
          y="90"
          fontSize="48"
          fontFamily="'Arial Black', Arial, sans-serif"
          textAnchor="middle"
          fill={checked ? "#fff" : "#444"}
          className="pointer-events-none select-none"
        >
          R
        </text>

        <text
          x="240"
          y="90"
          fontSize="48"
          fontFamily="'Arial Black', Arial, sans-serif"
          textAnchor="middle"
          fill={checked ? "#000" : "#fff"}
          className="pointer-events-none select-none"
        >
          T
        </text>

        {/* Goo filter */}
        <defs>
          <filter id="goo">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

'use client';

import Image from "next/image";
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export default function CancelButton({ onClick, text = "Yes, Cancel It", className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center gap-2 h-[80px] px-10 rounded-full bg-white
                 border-[3px] border-green-700 text-green-700 text-4xl font-extrabold ${plusJakartaSans.className}
                 hover:border-green-600 hover:text-green-600 transition-all duration-300 ease-in-out shadow-md ${className}`}
    >
      <span>{text}</span>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
          <Image src="/Circle-Top-Up--Streamline-Solar idea.svg" alt="Icon" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute inset-0 transition-all duration-1000 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
          <Image src="/Circle-Top-Up--Streamline-Solar hover.svg" alt="Hover Icon" layout="fill" objectFit="contain" />
        </div>
      </div>
    </button>
  );
}
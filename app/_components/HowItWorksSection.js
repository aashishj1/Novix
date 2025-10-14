'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// A simple SVG component for the scribble pattern in the learning cards
const Scribble = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
    <path d="M10 10 C 20 20, 40 0, 50 10 S 70 0, 80 10" stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 20 C 20 30, 40 10, 50 20 S 70 10, 80 20" stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 30 C 20 40, 40 20, 50 30 S 70 20, 80 30" stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 40 C 20 50, 40 30, 50 40 S 70 30, 80 40" stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 50 C 20 60, 40 40, 50 50 S 70 40, 80 50" stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// A simple component for the floating devices
const FloatingDevice = ({ className, isPhone = false }) => (
  <div className={`absolute bg-gray-200 border-4 border-gray-300 rounded-lg ${isPhone ? 'w-16 h-28' : 'w-32 h-20'} ${className}`} />
);

export default function HowItWorksSection() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e) => {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
      
      // If scrolling down (e.deltaY > 0) and not at the end of horizontal scroll
      if (e.deltaY > 0 && scrollLeft + clientWidth < scrollWidth - 1) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      } 
      // If scrolling up (e.deltaY < 0) and not at the start of horizontal scroll
      else if (e.deltaY < 0 && scrollLeft > 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
      // Otherwise, allow normal vertical scrolling
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Section 1: Let's See How Novix Work */}
      <div className="min-w-full h-screen snap-center flex items-center justify-center bg-[#FDF2F8] relative">
        <FloatingDevice className="top-20 left-10 rotate-[-15deg]" />
        <FloatingDevice className="top-20 right-20 rotate-[10deg]" isPhone />
        <FloatingDevice className="bottom-20 left-24 rotate-[15deg] bg-green-200 border-green-300" isPhone />
        <FloatingDevice className="bottom-20 right-32 rotate-[-10deg] bg-green-200 border-green-300" />
        <div className="text-center z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[250px] bg-pink-400 rounded-full blur-3xl opacity-40"></div>
          </div>
          <h1 className="text-7xl font-bold mb-4 relative">
            Let&apos;s See How
            <br />
            Novix Work
          </h1>
        </div>
      </div>

      {/* Section 2: Tools For Your Mind, Body & Soul */}
      <div className="min-w-full h-screen snap-center flex items-center justify-center bg-[#FDF2F8] relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-32 h-20 bg-white rounded-full blur-xl opacity-80"></div>
        <div className="absolute top-32 left-1/4 w-40 h-24 bg-white rounded-full blur-xl opacity-80"></div>
        <div className="absolute top-48 right-1/3 w-24 h-16 bg-white rounded-full blur-xl opacity-80"></div>

        <div className="text-center z-10 px-8">
          <h1 className="text-5xl font-bold mb-4">
            Tools For Your Mind, Body & Soul
          </h1>
          <p className="text-xs text-gray-500 mb-8 max-w-md mx-auto">
            All The Tools Are Backed By Psychology, Neuroscience And Compassion — Putting You In Control Of Your Own Healing
          </p>
          <div className="inline-block border border-gray-300 rounded-2xl p-6 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Explore Tools</span>
              <ArrowRight size={16} className="text-pink-400"/>
              <span>Set Routines</span>
              <ArrowRight size={16} className="text-pink-400"/>
              <span>Track Progress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Doctor Circle */}
      <div className="min-w-full h-screen snap-center flex items-center justify-center bg-[#FDF2F8] relative">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-2xl">
              <h2 className="text-4xl font-bold text-white">Doctor</h2>
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
            <defs>
              <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>
            <text className="text-base font-semibold fill-green-900 tracking-wider">
              <textPath href="#circlePath" startOffset="0%">
                Heal   •   Therapist   •   Issue   •   Therapy   •   Schedule   •   Pay
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Section 4: The Learning */}
      <div className="min-w-full h-screen snap-center flex items-center justify-center bg-[#FDF2F8] relative">
        <div className="text-center z-10 px-8">
          <h1 className="text-4xl font-bold mb-10">The Learning</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg w-56 h-56 flex flex-col items-center justify-between">
              <h3 className="text-xl font-bold">Blog</h3>
              <div className="w-full h-20"><Scribble /></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg w-56 h-56 flex flex-col items-center justify-between">
              <h3 className="text-xl font-bold">Video</h3>
              <div className="w-full h-20"><Scribble /></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg w-56 h-56 flex flex-col items-center justify-between">
              <h3 className="text-xl font-bold">Stories</h3>
              <div className="w-full h-20"><Scribble /></div>
            </div>
          </div>
        </div>
      </div>

      {/* This style block is necessary for the animations and scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
      `}</style>
    </div>
  );
}
'use client';

export default function ConsultButton() {
  return (
    <button 
      className="relative group p-2 w-50 rounded-full bg-green-900 text-white text-4xl font-bold mt[-4]
                     overflow-hidden transition-all duration-[8000ms] ease-in-out"
    >
      {/* This is the radial gradient that expands from the bottom */}
      <span 
        className="absolute bottom-0 left-1/2 w-10 h-10 rounded-full radial-gradient(circle, #45E38F 1%, transparent 99%)
                       transition-all duration-[5000ms] ease-in-out 
                       group-hover:scale-[500] -translate-x-1/2 translate-y-1/2 hover-text-black"
        style={{
          background: 'radial-gradient(circle, #45E38F 10%, transparent 90%)',
        }}
      ></span>
      
      {/* The text sits on top of the animation */}
      <span className="relative z-10">Consult</span>
    </button>
  );
}

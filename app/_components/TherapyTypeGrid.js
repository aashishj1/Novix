import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
});

export default function TherapyTypeGrid({ therapyTypes }) {
  return (
    <>
      <div className="py-8 px-4 mb-8 mt-10">
        <h2 className="text-7xl font-bold text-center mb-8 text-black , mb-7 ">
          Select The Type
        </h2>

        {/* 1. Grid width increased from max-w-5xl to max-w-7xl */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {therapyTypes.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* 2. Added border classes for the hover effect */}
              <div className="w-0 h-60 relative rounded-3xl overflow-hidden 
                             border-3 border-transparent group-hover:border-black 
                             transition-all duration-400">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 font-medium  text-xl text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 mb-50">
        <p
          className={`${caveat.className} text-black text-center text-6xl font-extralight`}
        >
          Therapy is the gentle art of helping yourself <br /> by accepting help
          from others
        </p>
      </div>
    </>
  );
}
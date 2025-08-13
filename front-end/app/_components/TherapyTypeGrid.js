import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
});

export default function TherapyTypeGrid({ therapyTypes }) {
  return (
    <>
      <div className="py-8 px-4">
        <h2 className="text-6xl font-bold text-center mb-8 text-black">
          Select The Type
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {therapyTypes.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-52 h-52 relative rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-medium text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p
          className={`${caveat.className} text-black text-center text-5xl font-extralight`}
        >
          Therapy is the gentle art of helping yourself <br /> by accepting help
          from others
        </p>
      </div>
    </>
  );
}

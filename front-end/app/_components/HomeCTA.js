import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center min-h-[500px] flex flex-col justify-center"
      style={{ backgroundImage: "url('/homectabg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Main container for all elements */}
        <div className="flex flex-col items-center">
          
          {/* 1. Heading Div (Top, Centered) */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-black leading-tight">
              Not Sure What You Need? Just Pause.
              <br />
              Breathe.
            </h1>
          </div>

          {/* Container for the middle row (Description and Illustration) */}
          <div className="w-full grid md:grid-cols-2 gap-12 items-center mb-8">
            
            {/* 2. Body/Description Div (Left) */}
            <div className="text-left">
              <p className="text-base text-white font-medium">
                We'll Help You Take The Next Step —
                <br />
                Whatever That Looks Like For You.
              </p>
            </div>

            {/* 3. Illustration Div (Right) */}
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/GIRL SITTIGN CTA.png"
                  alt="Illustration of a person relaxing"
                  width={1000}
                  height={1100}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
          </div>

          {/* 4. Consult Button Div (Bottom, Centered) */}
          <div className="text-center">
            <Link
              href="#"
              className="bg-gray-800 text-white font-semibold py-3 px-12 rounded-full text-lg hover:bg-gray-900 transition-all duration-300 shadow-xl"
            >
              Consult
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
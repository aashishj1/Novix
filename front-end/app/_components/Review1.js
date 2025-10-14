import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";

// Initialize fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Review1() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-9xl  max-h-4xl mx-auto flex flex-col md:flex-row items-center gap-30 bg-green-900 text-white rounded-3xl p-10 shadow-lg">
        
        {/* Left side: avatar / illustration */}
        <div className="flex-shrink-0">
          <div className="w-52 h-52 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Replace with <Image /> if you want */}
            <span className="text-5xl text-gray-600">👤</span>
          </div>
        </div>

        {/* Right side: testimonial text */}
        <div className={`flex-1 ${nunitoSans.className}`}>
          <h3 className={`text-5xl font-bold mb-2 ${plusJakartaSans.className}`}>
            Aashish Jaiswal
          </h3>
          <p className="text-lg leading-relaxed">
            “Dr. Ananya is very empathetic and helped me manage my anxiety within a few sessions. Highly recommended!”
          </p>
        </div>
      </div>
    </section>
  );
}
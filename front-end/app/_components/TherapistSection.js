// front-end/app/_components/TherapistSection.js

import Image from "next/image";

const therapists = [
  { name: "Dr. Karan", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { name: "Dr. Ravi", image: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Dr. Meera", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Dr. Sana", image: "https://randomuser.me/api/portraits/women/66.jpg" },
  { name: "Dr. Alok", image: "https://randomuser.me/api/portraits/men/77.jpg" },
  { name: "Dr. Priya", image: "https://randomuser.me/api/portraits/women/67.jpg" },
  { name: "Dr. Rohan", image: "https://randomuser.me/api/portraits/men/78.jpg" },
  { name: "Dr. Anjali", image: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const topRow = therapists.slice(0, 4);
const bottomRow = therapists.slice(4, 8);

const TherapistCard = ({ therapist }) => (
  // Increased card width from w-48 to w-72
  <div className="flex-shrink-0 w-72 mx-4">
    <div className="bg-[#2B1B15] p-2 rounded-2xl">
      <Image
        src={therapist.image}
        alt={therapist.name}
        width={300}
        height={300}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>
  </div>
);

export default function TherapistSection() {
  return (
    <section className="py-16 bg-white overflow-x-hidden">
      {/* Container for the heading, keeps it aligned */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-gray-800 mb-10">
          Meet Our Therapists
        </h2>
      </div>

      {/* Scrolling rows container - now it will be full width */}
      <div className="w-full">
        {/* Top Row - Scrolls to the left */}
        <div className="flex w-full mb-8">
          <div className="flex animate-scroll-left">
            {topRow.map((therapist, index) => (
              <TherapistCard key={`top-a-${index}`} therapist={therapist} />
            ))}
            {topRow.map((therapist, index) => (
              <TherapistCard key={`top-b-${index}`} therapist={therapist} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls to the right */}
        <div className="flex w-full">
          <div className="flex animate-scroll-right">
            {bottomRow.map((therapist, index) => (
              <TherapistCard key={`bottom-a-${index}`} therapist={therapist} />
            ))}
            {bottomRow.map((therapist, index) => (
              <TherapistCard key={`bottom-b-${index}`} therapist={therapist} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
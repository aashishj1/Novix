// components/TherapistSection.tsx
import Image from "next/image";

const therapists = [
  {
    name: "Dr. Karan",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Ravi",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Dr. Meera",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Sana",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Dr. Karan",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Ravi",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Dr. Meera",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Sana",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

export default function TherapistSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 ">
          Meet Our Therapists
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {therapists
            ? therapists.map((therapist, index) => (
                <div
                  key={index}
                  className="bg-[#2B1B15] p-4 rounded-xl flex flex-col items-center"
                >
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
}

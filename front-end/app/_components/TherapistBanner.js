import Image from "next/image";

const TherapistBanner = () => {
  return (
    <div className="w-full px-4 py-12 text-center bg-[#F7F5F1]">
      <h1 className="text-3xl md:text-7xl font-extrabold leading-tight text-black">
        FIND YOUR SAFE SPACE WITH <br />
        <span className="text-black">THE RIGHT THERAPIST</span>
      </h1>

      <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
        Choose from licensed experts trained to support your unique journey.
      </p>

      <div className="mt-8">
        <Image
          src="/list-of-doctor.png"
          alt="List of Therapists"
          width={1000}
          height={400}
          className="mx-auto h-auto w-auto max-w-full"
          priority
        />
      </div>

      <p className="mt-4 text-gray-700 text-sm relative left-[-40rem] top-[-69px]">
        50+ Doctor
      </p>
    </div>
  );
};

export default TherapistBanner;

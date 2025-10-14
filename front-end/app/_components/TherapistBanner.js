import Image from "next/image";

const TherapistBanner = () => {
  return (
    <div className="w-full px-4 pt-12 pb-0 text-center bg-[#F7F5F1] mb-20">
      <h1 
        className="font-extrabold leading-tight text-black"
        style={{ fontSize: '85px' }}
      >
        FIND YOUR SAFE SPACE WITH <br />
        <span className="text-black">THE RIGHT THERAPIST</span>
      </h1>
      <p className="mt-0 text-base text-gray-600 max-w-xl mx-auto">
        Choose from licensed experts trained to support your unique journey.
      </p>
      <div className="mt-0 relative">
        <Image
          src="/list-of-doctor.png"
          alt="List of Therapists"
          width={1000}
          height={400}
          className="mx-auto h-auto w-auto max-w-full"
          priority
        />
        <p className="absolute bottom-[50rem] left-8 text-gray-700 text-sm">
          50+ Doctor
        </p>
      </div>
    </div>
  );
};

export default TherapistBanner;
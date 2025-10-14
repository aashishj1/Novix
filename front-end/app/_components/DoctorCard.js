import Image from "next/image";

// DoctorCard.tsx
export default function DoctorCard() {
  return (
    <div className="flex justify-center items-center bg-[#E7D7C6] py-20">
      <div className="w-[95%] max-w-7xl border border-gray-300 rounded-3xl bg-[#E7D7C6] relative flex items-center justify-center overflow-hidden min-h-[80vh]">
        {/* Shadow base */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-36 h-10 bg-[#224733] rounded-full blur-md z-0" />

        {/* Doctor Image */}
        <div className="h-full flex items-center z-10">
          <Image
            src="/doctor-cartoon.png"
            alt="Doctor Cartoon"
            width={0}
            height={0}
            sizes="100vh"
            className="h-full w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

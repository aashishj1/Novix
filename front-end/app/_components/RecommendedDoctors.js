import Image from "next/image";
import React from "react";
import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';

// Import your custom components
import ConsultButton from './ConsultButton';
import ViewProfileButton from './ViewProfileButton';
import ToggleSwitch from './ToggleSwitch'; // Imported from the specified file path


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});


const doctors = [
  {
    name: "Dr. Amerjeet Singh",
    title: "Depression expert",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "/Rectangle 174.png",
    badge: "High Demand",
  },
  {
    name: "Dr. Amerjeet Singh",
    title: "Psychologist",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "/path-to-your-images/doctor-female-1.png",
  },
  {
    name: "Dr. Amerjeet Singh",
    title: "Psychologist",
    tags: ["Relationship Expert", "10+ Years Experience"],
    price: "₹500/session",
    rating: "4.8/5",
    reviews: 320,
    image: "/path-to-your-images/doctor-female-2.png",
  },
];

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-400">
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.818 3.762 4.152.603c.73.106 1.022.998.494 1.512l-3.004 2.928.709 4.135c.125.728-.638 1.283-1.29.948L10 14.89l-3.715 1.952c-.652.335-1.415-.22-1.29-.948l.709-4.135-3.004-2.928c-.528-.514-.236-1.406.494-1.512l4.152-.603 1.818-3.762z" clipRule="evenodd" />
    </svg>
);

const RecommendedDoctors = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center py-12 px-4 bg-white gap-8">
      
      <div className="bg-[#043d23] text-white rounded-[40px] p-8 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-16">
          <h2 className={`text-5xl font-bold tracking-wider ${plusJakartaSans.className}`}>Recommended</h2>
          <ToggleSwitch />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className={`bg-[#F8F5F0] text-black rounded-3xl p-4 pt-16 flex flex-col items-center text-center relative shadow-lg ${nunitoSans.className}`}
            >
              {doc.badge && (
                <span className="absolute top-0 -right-3 bg-[#E83975] text-white text-[11px] font-semibold px-4 py-1 rounded-full shadow-md">
                  {doc.badge}
                </span>
              )}
              <div className="absolute -top-12 w-28 h-28 rounded-full overflow-hidden border-3 bg-[#C0BFBD] border-grey-100 shadow-md">
                <Image src={doc.image} alt={doc.name} width={112} height={112} className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="font-light text-3xl">{doc.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{doc.title}</p>
                <div className="text-xs text-gray-500 mt-2 leading-tight">
                  {doc.tags.map((tag, i) => (<p key={i}>{tag}</p>))}
                </div>
              </div>
              <div className="flex justify-between items-center w-full text-sm mt-4 px-2">
                <span className="font-semibold text-gray-800">{doc.price}</span>
                <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="font-bold text-gray-800">{doc.rating}</span>
                    <span className="text-gray-400">({doc.reviews})</span>
                </div>
              </div>

              <div className="flex w-full mt-5 justify-center items-center">
                <div className="transform scale-60">
                  <ConsultButton />
                </div>
                <div className="transform scale-60 -ml-12">
                  <ViewProfileButton />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-full max-w-sm">
          <Image
              src="/doctor-cartoon.png"
              alt="3D Doctor Illustration"
              width={400} 
              height={700}
              className="object-contain scale-150"
          />
      </div>

    </div>
  );
};

export default RecommendedDoctors;
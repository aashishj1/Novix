import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Logo component for the pink box
const NovixLogo = () => (
  <div className="w-20 h-20 bg-[#1a3d32] rounded-full flex items-center justify-center">
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 30 Q50 50 80 70 M35 10 Q50 50 35 65"
        stroke="#4ade80"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>
);

export default function Footer() {
  return (
    // Added mt-40 for the top margin
    <div className="bg-white relative mt-80">
      {/* Wavy curve at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="relative block w-full h-[180px]"
        >
          <path
            d="M0,90 C240,10 360,150 720,120 C1080,90 1200,160 1440,80 L1440,180 L0,180 Z"
            className="fill-[#a8f5d0]"
          />
        </svg>
      </div>

      <footer className="relative bg-[#a8f5d0] pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-8">
          {/* Top Section - Now flex-col on small screens */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-8">
            <div className="bg-[#e91e7f] text-white px-8 py-6 rounded-[2.5rem] flex items-center gap-8 w-full md:max-w-2xl shadow-lg">
              <div className="flex-shrink-0">
                <NovixLogo />
              </div>
              <div>
                <h2 className="text-4xl md:text-7xl font-black mb-1 tracking-wide">NOVIX</h2>
                <p className="text-md font-light italic">we care for you</p>
              </div>
            </div>
            {/* Hidden on small screens */}
            <h1 className="hidden md:block text-md font-black tracking-[0.3em] text-black">
              NOVIX
            </h1>
          </div>

          <hr className="border-black border-t-2 mb-6" />

          {/* Links Grid - Stacks on small screens */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-6">
            <div>
              <h4 className="font-black mb-3 text-black text-xl md:text-3xl tracking-wider">
                NOVIX
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li><Link href="#" className="hover:underline">about us</Link></li>
                <li><Link href="#" className="hover:underline">contact us</Link></li>
                <li><Link href="#" className="hover:underline">security</Link></li>
                <li><Link href="#" className="hover:underline">privacy policy</Link></li>
                <li><Link href="#" className="hover:underline">press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-3 text-black text-xl md:text-3xl tracking-wider">
                SERVICE
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li><Link href="#" className="hover:underline">Personalized Therapy</Link></li>
                <li><Link href="#" className="hover:underline">Self-Care Tools</Link></li>
                <li><Link href="#" className="hover:underline">Mental Health Programs</Link></li>
                <li><Link href="#" className="hover:underline">Community Support</Link></li>
                <li><Link href="#" className="hover:underline">Resources</Link></li>
              </ul>
            </div>
            {/* This column now spans 2 columns on small screens */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black mb-3 text-black text-xl md:text-3xl tracking-wider">
                BUSINESS
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li><Link href="#" className="hover:underline">Corporate Mental Health</Link></li>
                <li><Link href="#" className="hover:underline">Workplace Wellness</Link></li>
                <li><Link href="#" className="hover:underline">Collaboration & Partnerships</Link></li>
                <li><Link href="#" className="hover:underline">Employee Assistance</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black mb-3 text-black text-xl md:text-3xl tracking-wider">
                DOCTOR
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li><Link href="#" className="hover:underline">Join as a Mental Health Expert</Link></li>
                <li><Link href="#" className="hover:underline">Doctor Dashboard</Link></li>
                <li><Link href="#" className="hover:underline">Research & Insights</Link></li>
                <li><Link href="#" className="hover:underline">Professional Growth</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 flex md:flex-col items-center md:items-end justify-center gap-4">
              <Link href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:opacity-80 transition"><Instagram className="text-white" size={24} /></Link>
              <Link href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80 transition"><Facebook className="text-white" size={24} /></Link>
              <Link href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:opacity-80 transition"><Youtube className="text-white" size={24} /></Link>
              <Link href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition"><Twitter className="text-white" size={24} /></Link>
              <Link href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:opacity-80 transition"><Linkedin className="text-white" size={24} /></Link>
            </div>
          </div>

          <hr className="border-black border-t-2 mb-4" />

          <div className="text-center space-y-1">
            <Link href="#" className="text-sm text-black font-bold hover:underline inline-block">Privacy Policy</Link>
            <p className="text-sm text-black font-medium tracking-wider">Copyright @ 2024 novix</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
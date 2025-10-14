import { Send } from "lucide-react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from 'next/font/google';

// Initialize the font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// A reusable component for the minimalist input fields
const FormInput = ({ label }) => (
  // Line is now thicker with border-b-2
  <div className="w-full max-w-md border-b-2 border-gray-300 py-3">
    <input
      type="text"
      placeholder={label}
      className="w-full bg-transparent text-center text-sm text-black placeholder-gray-500 focus:outline-none"
    />
  </div>
);

export default function ContactForm() {
  return (
    // Updated overall background color and applied the new font
    <div className={`bg-[#F7F5F1] py-20 px-4 ${plusJakartaSans.className}`}>
      <div className="max-w-2xl mx-auto text-center">
        
        <section className="mb-12">
          <h2 className="text-7xl font-bold text-black mb-3">Get In Touch</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have questions, feedback, or need support? Reach out to us, and we&apos;ll get back to you ASAP.
          </p>
        </section>

        <section className="mb-40">
          {/* Replaced double border with a single border */}
          <div className="border border-gray-900 rounded-3xl px-12 py-16">
            <div className="flex flex-col items-center space-y-3">
              <FormInput label="WHAT'S YOUR NAME ?" />
              <FormInput label="WHAT'S YOUR EMAIL? *" />
              <FormInput label="WHAT'S YOUR MOBILE NUMBER ?" />
              <FormInput label="WHAT'S YOUR CATEGORY ?" />
              <FormInput label="DESCRIBE YOUR QUERY ?" />
            </div>
            <div className="text-center mt-10">
              {/* Made the button bigger */}
              <button className="bg-green-50 text-green-900 border-2 border-green-800 rounded-2xl font-bold text-base py-4 px-8 hover:bg-green-200 transition-colors flex items-center justify-center gap-3 mx-auto">
                <Send size={30} />
                Send Message
              </button>
            </div>
          </div>
        </section>
<section className="text-center">
  <h2 className="text-6xl font-bold mb-20 text-black">
    CONTACT LINKS
  </h2>
  {/* - 'grid' creates the grid layout.
    - 'grid-cols-2 sm:grid-cols-3' defines 2 columns on small screens and 3 on larger screens.
    - 'gap-y-20' is the vertical gap (space) between rows. The horizontal gap has been removed.
    - 'max-w-9xl' sets the maximum width of this container.
    - 'mx-0' sets the horizontal margin to 0 (no space on the left or right).
    - 'mb-20' is the margin (space) at the bottom of this container.
  */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-20 max-w-9xl mx-8 mb-20">
    <div>
      <h3 className="text-6xl font-semibold mb-2 mr-8 ">Email</h3>
      <p className="text-gray-600 text-sm">contact us by email and we respond shortly</p>
    </div>
    <div>
      <h3 className="text-6xl font-semibold mb-2">Phone No</h3>
      <p className="text-gray-600 text-sm">call us on weekdays from 9 to 5 pm</p>
    </div>
    <div>
      <h3 className="text-6xl font-semibold mb-2">Address</h3>
      <p className="text-gray-600 text-sm">we are not accepting any personal office visit</p>
    </div>
  </div>
</section>
          <div className="flex justify-center gap-6">
            <a href="#" aria-label="Facebook" className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:opacity-80 transition">
              <img src="/facebook-logo.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:opacity-80 transition">
              <img src="/twitter-logo.svg" alt="Twitter" className="h-6" />
            </a>
            <a href="#" aria-label="YouTube" className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:opacity-80 transition">
               <img src="/youtube-logo.svg" alt="YouTube" className="h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:opacity-80 transition">
               <img src="/instagram-logo.svg" alt="Instagram" className="h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:opacity-80 transition">
              <img src="/linkedin-logo.svg" alt="LinkedIn" className="h-6" />
            </a>
          </div>
        

      </div>
    </div>
  );
};
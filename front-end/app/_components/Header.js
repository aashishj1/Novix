"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LogoutButton from "./LogoutButton";
import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

// --- Data for Dropdown Images ---
// UPDATE: I've moved the data for the "Top option" links into constants.
// This makes it easy for you to change the labels, links, and especially the image sources.
// ACTION: Replace the `imageSrc` paths with the paths to your actual images.

const consultTopOptions = [
  { label: "Book Your Session", href: "/bookYourSession", imageSrc: "/images/consult-session.jpg" },
  { label: "Your Doctor", href: "/doctor/profile", imageSrc: "/images/consult-doctor.jpg" },
  { label: "Manage appointment", href: "/doctor/manage-appointment", imageSrc: "/images/consult-manage.jpg" },
];

const toolsTopOptions = [
  { label: "Mood Tracker", href: "/tools/mood-tracker", imageSrc: "/images/tool-mood.jpg" },
  { label: "Journal", href: "/tools/journal", imageSrc: "/images/tool-journal.jpg" },
  { label: "Meditation", href: "/tools/meditation", imageSrc: "/images/tool-meditation.jpg" },
  { label: "Breathing", href: "/tools/breathing", imageSrc: "/images/tool-breathing.jpg" },
  { label: "Self-Care Checklist", href: "/tools/self-care", imageSrc: "/images/tool-selfcare.jpg" },
];

const learnTopOptions = [
  { label: "Blogs", href: "/learn/blogs", imageSrc: "/images/learn-blogs.jpg" },
  { label: "Video Series", href: "/learn/videos", imageSrc: "/images/learn-videos.jpg" },
  { label: "Stories", href: "/learn/stories", imageSrc: "/images/learn-stories.jpg" },
  { label: "Infographics", href: "/learn/infographics", imageSrc: "/images/learn-infographics.jpg" },
  { label: "Short Videos", href: "/learn/short-videos", imageSrc: "/images/learn-shorts.jpg" },
];

const communityTopOptions = [
  { label: "Community", href: "/community", imageSrc: "/images/community-main.jpg" },
  { label: "Success Story", href: "/community/success-stories", imageSrc: "/images/community-success.jpg" },
];

const aboutTopOptions = [
  { label: "about us", href: "/about", imageSrc: "/images/about-us.jpg" },
  { label: "contact us", href: "/contact", imageSrc: "/images/about-contact.jpg" },
];

const securityTopOptions = [
    { label: "privacy policy", href: "/security/privacy-policy", imageSrc: "/images/security-privacy.jpg" },
    { label: "term & condition", href: "/security/terms", imageSrc: "/images/security-terms.jpg" },
];


const UserIconDefault = () => (
  <Image
    src="/user colour.svg"
    alt="User Profile"
    width={42}
    height={42}
    className="transition-transform duration-300 group-hover:scale-110"
  />
);

const UserIconActive = () => (
  <Image
    src="/users black.svg"
    alt="User Profile"
    width={52}
    height={52}
    className="transition-transform duration-300 group-hover:scale-110"
  />
);

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function Header() {
  // UPGRADE 1: Refactored state management for hover behavior.
  // Instead of multiple boolean states, a single state now tracks the active dropdown.
  // `null` means no dropdown is open.
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isHeaderActive = activeDropdown !== null;

  return (
    // UPGRADE 1: The `onMouseLeave` is now on the main <header> element.
    // This ensures that the dropdown only closes when the cursor leaves the entire header area (nav + dropdown).
    <header className="relative" onMouseLeave={() => setActiveDropdown(null)}>
      <motion.nav
        animate={{
          backgroundColor: isHeaderActive ? "rgb(255 255 255)" : "rgb(5 63 35)",
          color: isHeaderActive ? "rgb(0 0 0)" : "rgb(255 255 255)",
        }}
        transition={{ duration: 0.3 }}
        // UPGRADE 1: Removed the master `onMouseLeave` from here.
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-3 items-center h-16">
            {/* LEFT SECTION */}
            <div className="flex justify-start">
              <Link href="/" className="text-6xl font-semibold tracking-wider" style={{ fontFamily: "serif" }}>
                NOVIX
              </Link>
            </div>

            {/* CENTER SECTION */}
            {/* UPGRADE 1: Each nav item now uses `onMouseEnter` to set the active dropdown. */}
            <div className="flex justify-center space-x-10">
              <div onMouseEnter={() => setActiveDropdown('consult')}>
                <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                  <Link href="#" className={`text-2xl font-medium transition-colors ${isHeaderActive ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                    Consult
                  </Link>
                </motion.div>
              </div>
              <div onMouseEnter={() => setActiveDropdown('tools')}>
                <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                  <Link href="#" className={`text-2xl font-medium transition-colors ${isHeaderActive ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                    Tools
                  </Link>
                </motion.div>
              </div>
              <div onMouseEnter={() => setActiveDropdown('learn')}>
                <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                  <Link href="#" className={`text-2xl font-medium transition-colors ${isHeaderActive ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                    Learn
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex justify-end items-center space-x-6">
              <div onMouseEnter={() => setActiveDropdown('community')}>
                <Link href="/community" className={`text-base lowercase transition-colors ${isHeaderActive ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'}`}>
                  community
                </Link>
              </div>
              <div onMouseEnter={() => setActiveDropdown('about')}>
                <Link href="/about" className={`text-base lowercase transition-colors ${isHeaderActive ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'}`}>
                    about
                </Link>
              </div>
              <div onMouseEnter={() => setActiveDropdown('security')}>
                <Link href="/security" className={`text-base lowercase transition-colors ${isHeaderActive ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'}`}>
                  security
                </Link>
              </div>
              <div className={`h-6 w-px ${isHeaderActive ? 'bg-gray-300' : 'bg-gray-400'}`}></div>
              <div className="relative flex items-center group" onMouseEnter={() => setActiveDropdown('user')}>
                <button className="flex items-center gap-2 rounded-lg transition-all duration-200">
                  {activeDropdown === 'user' ? <UserIconActive /> : <UserIconDefault />}
                </button>
                {activeDropdown !== 'user' && <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-pink-500 border-2 border-green-950"></span>}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* DROPDOWNS */}
      {/* UPGRADE 1: Each dropdown now checks against the `activeDropdown` state. */}
      {/* The `onMouseLeave` prop has been removed from the motion.div, as the parent <header> now handles closing. */}

      {/* CONSULT DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'consult' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>Consult</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Get expert mental health support through professional consultations and therapy sessions.
                  </p>
                </div>
                <Link href="#" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  Consult now <ArrowRightIcon />
                </Link>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6 mr-10`}>Top option</h3>
                <div className="flex gap-3 mr-10">
                  {consultTopOptions.map(option => (
                    <Link key={option.label} href={option.href} className="group text-left">
                      {/* UPGRADE 2: Replaced grey box with Image component */}
                      <div className="relative w-32 h-32 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                          <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                      </div>
                      <p className={`${nunitoSans.className} font-semibold text-sm flex items-left justify-left gap-1`}>
                        {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-10 ml-30`}>Helpful link</h3>
                <ul className="space-y-5 mb-10 ml-30">
                  {[
                    { label: "How Therapy Works", href: "/info/therapy-works" },
                    { label: "Find the Right Therapist", href: "/bookYourSession" },
                    { label: "Therapy FAQs", href: "/faq" },
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className={`${nunitoSans.className} text-base font-semibold hover:underline`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOOLS DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'tools' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>Tools</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Access a variety of tools to track, analyze, and improve your mental well-being.
                  </p>
                </div>
                <Link href="#" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  EXPLORE TOOLS <ArrowRightIcon />
                </Link>
              </div>
              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6 mr-10`}>Top option</h3>
                <div className="flex flex-col gap-y-6 mr-10">
                  <div className="flex gap-3">
                    {toolsTopOptions.slice(0, 3).map(option => (
                      <Link key={option.label} href={option.href} className="group text-left">
                        <div className="relative w-32 h-32 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                            <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                        </div>
                        <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1`}>
                          {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {toolsTopOptions.slice(3, 5).map(option => (
                      <Link key={option.label} href={option.href} className="group text-left">
                        <div className="relative w-32 h-32 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                            <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                        </div>
                        <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1`}>
                          {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-10 ml-30`}>Helpful link</h3>
                <ul className="space-y-5 mb-10 ml-30">
                  {[
                    { label: "How to Use Our Tools", href: "/tools/guide" },
                    { label: "Daily Wellness Guide", href: "/tools/wellness-guide" },
                    { label: "Mindfulness Techniques", href: "/tools/mindfulness" },
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className={`${nunitoSans.className} text-base font-semibold hover:underline`}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEARN DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'learn' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>LEARN</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Expand your mental health awareness through curated content and expert insights.
                  </p>
                </div>
                <Link href="#" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  EXPLORE LEARN <ArrowRightIcon />
                </Link>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6 mr-10`}>Top option</h3>
                <div className="flex flex-col gap-y-6 mr-10">
                  <div className="flex gap-3">
                    {learnTopOptions.slice(0, 3).map(option => (
                      <Link key={option.label} href={option.href} className="group text-left">
                        <div className="relative w-32 h-32 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                            <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                        </div>
                        <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1`}>
                          {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {learnTopOptions.slice(3, 5).map(option => (
                      <Link key={option.label} href={option.href} className="group text-left">
                        <div className="relative w-32 h-32 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                            <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                        </div>
                        <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1`}>
                          {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-10 ml-30`}>Helpful link</h3>
                <ul className="space-y-5 mb-10 ml-30">
                  {[
                    { label: "Top Mental Health Blogs", href: "/learn/top-blogs" },
                    { label: "Watch Therapy Sessions", href: "/learn/therapy-sessions" },
                    { label: "Success Stories", href: "/learn/success-stories" },
                  ].map(link => (
                    <li key={link.label}><Link href={link.href} className={`${nunitoSans.className} text-base font-semibold hover:underline`}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All other dropdowns (Community, About, Security, User) follow the same updated pattern... */}

      {/* COMMUNITY DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'community' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>Community</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Join a safe, supportive space to share experiences and gain insights from others.
                  </p>
                </div>
                <Link href="/community" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  community <ArrowRightIcon />
                </Link>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Top option</h3>
                <div className="flex gap-3">
                  {communityTopOptions.map(option => (
                    <Link key={option.label} href={option.href} className="group text-left">
                      <div className="relative w-40 h-40 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                          <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                      </div>
                      <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1`}>
                        {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Helpful link</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Community Guidelines", href: "/community/guidelines" },
                    { label: "Success Stories", href: "/community/success-stories" },
                    { label: "Support Group Finder", href: "/community/support-group-finder" },
                  ].map(link => (
                    <li key={link.label}><Link href={link.href} className={`${nunitoSans.className} text-lg font-semibold hover:underline`}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ABOUT DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>About</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Learn about Novix, our vision, and the team behind the platform.
                  </p>
                </div>
                <Link href="/about" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  Explore about <ArrowRightIcon />
                </Link>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Top option</h3>
                <div className="flex gap-3">
                  {aboutTopOptions.map(option => (
                    <Link key={option.label} href={option.href} className="group text-left">
                      <div className="relative w-40 h-40 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                          <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                      </div>
                      <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1 capitalize`}>
                        {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Helpful link</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Community Guidelines", href: "/community/guidelines" },
                    { label: "Success Stories", href: "/community/success-stories" },
                    { label: "Support Group Finder", href: "/community/support-group-finder" },
                  ].map(link => (
                    <li key={link.label}><Link href={link.href} className={`${nunitoSans.className} text-lg font-semibold hover:underline`}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECURITY DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-8 py-20 text-black">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className={`${plusJakartaSans.className} text-6xl font-extrabold mb-4`}>Security</h2>
                  <p className={`${nunitoSans.className} text-base text-gray-700`}>
                    Your privacy matters. Learn how we protect your data and ensure a safe experience.
                  </p>
                </div>
                <Link href="/security" className={`${plusJakartaSans.className} text-2xl font-bold flex items-center gap-2 hover:text-pink-500 transition-colors`}>
                  see security <ArrowRightIcon />
                </Link>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Top option</h3>
                <div className="flex gap-3">
                  {securityTopOptions.map(option => (
                    <Link key={option.label} href={option.href} className="group text-left">
                      <div className="relative w-40 h-40 rounded-2xl mb-2 overflow-hidden group-hover:opacity-80 transition-opacity">
                          <Image src={option.imageSrc} alt={option.label} layout="fill" objectFit="cover" />
                      </div>
                      <p className={`${nunitoSans.className} font-semibold text-sm flex items-center gap-1 capitalize`}>
                        {option.label} <span className="opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRightIcon /></span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`${plusJakartaSans.className} text-2xl font-bold mb-6`}>Helpful link</h3>
                <ul className="space-y-4 ">
                  {[
                    { label: "How We Protect Your Data", href: "/security/data-protection" },
                    { label: "User Rights & Security", href: "/security/user-rights" },
                    { label: "Report a Privacy Concern", href: "/security/report" },
                  ].map(link => (
                    <li key={link.label}><Link href={link.href} className={`${nunitoSans.className} text-lg font-semibold hover:underline`}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* USER PROFILE DROPDOWN */}
      <AnimatePresence>
        {activeDropdown === 'user' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 mt-2 w-[380px] bg-white rounded-[28px] shadow-2xl z-50 p-4 border border-gray-200"
            style={{ top: "100%" }}
          >
            <div className="bg-[#D1D1D1] rounded-2xl flex flex-col items-center p-4">
              <UserIconActive />
              <p className="text-2xl font-bold text-black mt-5">
                Hello! Aashish Jaiswal
              </p>
            </div>
            {/* UPGRADE 3: Removed `space-y-1` from both `ul` elements to reduce the gap. */}
            <ul className="text-black text-lg font-medium mt-8 ml-10 px-2">
              {[
                { href: "/profile", label: "my profile" },
                { href: "/analytics", label: "view analytics" },
                { href: "/dashboard", label: "dashboard setting" },
                { href: "/therapy", label: "my therapy" },
                { href: "/path", label: "my path" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block py-2 hover:bg-gray-100 rounded-lg px-2 capitalize transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-300 my-4 mx-2"></div>
            <ul className="text-black text-lg font-medium ml-10 px-2 pb-1">
              {[
                { href: "/notifications", label: "Notification" },
                { href: "/setting/notification", label: "Setting" },
                { href: "/history", label: "History" },
                { href: "/saved", label: "saved" },
                { href: "/favorites", label: "Favourite" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block py-2 hover:bg-gray-100 rounded-lg px-2 capitalize transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LogoutButton />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

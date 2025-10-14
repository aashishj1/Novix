"use client";

import { UserCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative">
      <nav className="bg-[#1A3E2F] text-white">
        {/* Reduced horizontal padding (px-2 sm:px-4 lg:px-6) */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Reduced height (h-16) */}
          <div className="grid grid-cols-3 items-center h-16">
            {/* ====== 1. LEFT SECTION ====== */}
            <div className="flex justify-start">
              <Link
                href="/"
                className="text-6xl font-semibold tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                NOVIX
              </Link>
            </div>

            {/* ====== 2. CENTER SECTION ====== */}
            <div className="flex justify-center space-x-10">
              <Link
                href="#"
                className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              >
                Consult
              </Link>
              <Link
                href="#"
                className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              >
                Tools
              </Link>
              <Link
                href="#"
                className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              >
                Learn
              </Link>
            </div>

            {/* ====== 3. RIGHT SECTION ====== */}
            <div className="flex justify-end items-center space-x-6">
              <Link
                href="#"
                className="text-base lowercase text-gray-300 hover:text-white transition-colors"
              >
                community
              </Link>
              <Link
                href="#"
                className="text-base lowercase text-gray-300 hover:text-white transition-colors"
              >
                about
              </Link>
              <Link
                href="#"
                className="text-base lowercase text-gray-300 hover:text-white transition-colors"
              >
                security
              </Link>

              {/* Vertical Separator */}
              <div className="h-6 w-px bg-gray-400"></div>

              {/* User Profile Icon */}
              <div className="relative flex items-center">
                <button className="flex items-center gap-2 rounded-lg transition-all duration-200">
                  <UserCircle className="w-8 h-8 text-white hover:scale-[1.3]" />
                </button>
                {/* Notification Dot */}
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-pink-500 border-2 border-[#1A3E2F]"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
"use client";

import {
  UserCircle,
  Menu,
  X,
  ChevronDown,
  Shield,
  Users,
  BookOpen,
  Wrench,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="relative">
      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent"
                >
                  NOVIX
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Consult Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("consult")}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200 font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consult
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "consult" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "consult" && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Book Session
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Find Therapist
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Group Therapy
                      </a>
                    </div>
                  )}
                </div>

                {/* Tools Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("tools")}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200 font-medium"
                  >
                    <Wrench className="w-4 h-4" />
                    Tools
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "tools" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "tools" && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Mood Tracker
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Meditation
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Journal
                      </a>
                    </div>
                  )}
                </div>

                {/* Learn */}
                <a
                  href="#"
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200 font-medium"
                >
                  <BookOpen className="w-4 h-4" />
                  Learn
                </a>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <a
                  href="#"
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Users className="w-4 h-4" />
                  Community
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  About
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Shield className="w-4 h-4" />
                  Security
                </a>
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
                >
                  <UserCircle className="w-6 h-6 text-pink-300" />
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "profile" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "profile" && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      My Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      Billing
                    </a>
                    <hr className="my-2 border-gray-200" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                    >
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-emerald-800/95 backdrop-blur-sm border-t border-emerald-500/20">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Mobile Main Nav */}
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consult
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <Wrench className="w-5 h-5" />
                  Tools
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Learn
                </a>
              </div>

              <hr className="border-emerald-500/30" />

              {/* Mobile Secondary Nav */}
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Community
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Security
                </a>
              </div>

              <hr className="border-emerald-500/30" />

              {/* Mobile Profile */}
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <UserCircle className="w-5 h-5 text-pink-300" />
                  My Profile
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-red-300 hover:text-red-200 hover:bg-red-500/10 transition-colors"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </header>
  );
}

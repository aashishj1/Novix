'use client';

import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="bg-[#F8F5F0]">
      {/* 1. Large NOVIX Heading with Hover Effect */}
      <div className="text-center py-20">
        <motion.h1
          className="text-9xl font-extrabold text-[#1A3E2F] tracking-widest cursor-pointer"
          whileHover={{
            rotate: [0, -1, 1, -1, 1, 0],
          }}
          transition={{ duration: 2 }}
        >
          NOVIX
        </motion.h1>
      </div>

      {/* 2. Text Sections */}
      <div className="max-w-5xl mx-auto text-center px-4 space-y-16">
        <div>
          <h2 className="text-6xl font-md text-black mb-4">A Shared Journey</h2>
          <p className="text-gray-600 leading-relaxed">
            At Novix, we believe that mental well-being isn't just a service—it's a shared journey. We're not here to stand apart from you; we're here to walk beside you every step of the way. Novix is your brand, built on trust, empathy, and a genuine passion for transformation. Together, we create a space where every challenge is met with understanding and every victory is celebrated as a collective triumph.
          </p>
        </div>
        <div>
          <h2 className="text-6xl font-md text-black mb-4">Our Story, Your Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Our journey began with a simple belief: that every individual deserves a safe, supportive environment to explore and nurture their mental health. From our humble beginnings to our growth into a trusted haven for thousands, every milestone has been powered by you—your courage, your resilience, and your unwavering spirit. When you choose Novix, you're not just selecting a service; you're becoming a part of a community that writes its own story, where every chapter is filled with hope and transformation.
          </p>
        </div>
      </div>
      
      {/* 3. Full-Width "Why We Stand Apart" Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold text-black">Why We Stand Apart</h2>
        </div>
        <div className="grid md:grid-cols-3">
          {/* Increased card height with more vertical padding (py-20) */}
          <div className="bg-[#1A3E2F] text-white px-10 py-10">
            <h3 className="font-bold text-3xl mb-17">A Partnership in Progress</h3>
            <p className="opacity-80">
              Discover a transformative experience with therapy sessions designed specifically for your unique path. Our experts don't just treat symptoms—they empower you with the tools to rewrite your narrative.
            </p>
          </div>
          <div className="bg-[#EA337E] text-white px-10 py-10">
            <h3 className="font-bold text-3xl mb-17">Innovative Self-Help Tools</h3>
            <p className="opacity-80">
              Discover a transformative experience with therapy sessions designed specifically for your unique path. Our experts don't just treat symptoms—they empower you with the tools to rewrite your narrative.
            </p>
          </div>
          <div className="bg-[#1A3E2F] text-white px-10 py-10">
            <h3 className="font-bold text-3xl mb-8">Inspiring Community & Learning</h3>
            <p className="opacity-80">
              Discover a transformative experience with therapy sessions designed specifically for your unique path. Our experts don't just treat symptoms—they empower you with the tools to rewrite your narrative.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom CTA Banner */}
      <div className="py-16 px-4">
        {/* Widened banner to 98% of screen width and increased text size */}
        <div className="w-[98%] mx-auto bg-[#1A3E2F] text-white text-center rounded-full py-10">
          <h2 className="text-5xl font-bold">Hey We Are There For You Only</h2>
        </div>
      </div>
    </section>
  );
}

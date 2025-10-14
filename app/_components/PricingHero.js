'use client';

import { useState } from 'react';
import { Plus_Jakarta_Sans, Italiana } from 'next/font/google';

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
});

export default function PricingHero() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  return (
    <section className="w-full bg-[#FCE7F1] flex flex-col items-center justify-center py-24 px-4 min-h-[70vh]">
      
      {/* Main Heading */}
      <h1 className={`text-9xl font-medium text-black text-center leading-none ${plusJakartaSans.className}`}>
        Pricing
        <br />
        <span className={italiana.className}>PLAN</span>
      </h1>

      {/* Yearly/Monthly Toggle Switch */}
      <div className="mt-12 flex items-center p-1 space-x-2 bg-white/50 rounded-full shadow-md">
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            billingCycle === 'yearly'
              ? 'bg-green-100 text-green-900 shadow-sm'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          yearly
        </button>
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            billingCycle === 'monthly'
              ? 'bg-green-900 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Monthly
        </button>
      </div>

    </section>
  );
}
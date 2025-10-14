import React from 'react';

// A simple checkmark SVG component for the table
const Checkmark = ({ colorClass = 'text-pink-500' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" className={`${colorClass.replace('text-', 'bg-').replace('-300', '-100')} opacity-50`} />
    <path d="M8 12.5L11 15.5L16 9.5" stroke="currentColor" className={colorClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Data for the table headers
const plans = [
  { name: 'Basic', price: '$500–$1000 / month' },
  { name: 'Standard', price: '$500–$1000 / month', isPopular: true },
  { name: 'Premium', price: '$5000+ / month' },
];

// Data for the feature rows
const features = [
  { name: 'Full custom website design', basic: true, standard: true, premium: true },
  { name: 'Advance development', basic: true, standard: true, premium: true },
  { name: 'Complex features (e-commerce)', basic: true, standard: true, premium: true },
  { name: 'Complete branding overhaul', basic: true, standard: true, premium: true },
  { name: 'Multi-platform integration', basic: false, standard: true, premium: true },
  { name: 'Full content creation', basic: false, standard: false, premium: true },
  { name: 'Ongoing maintenance and support', basic: false, standard: true, premium: true },
  { name: 'Comprehensive SEO strategy', basic: false, standard: true, premium: true },
  { name: 'Dedicated account manager', basic: false, standard: false, premium: true },
  { name: 'CMS integration', basic: false, standard: false, premium: true },
];

export default function PricingComparison() {
  return (
    <section className="bg-[#FCE7F1] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-black tracking-wide">
            PRICING
            <br />
            COMPARISON
          </h2>
        </div>

        {/* This is now a flex container for the rows, with a gap */}
        <div className="flex flex-col gap-2">
          {/* Header Row - now has its own rounding */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] rounded-2xl overflow-hidden">
            <div className="p-6 bg-[#FCE7F1]"></div> {/* Empty corner */}
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 text-center ${plan.isPopular ? 'bg-[#F9A8CD]' : 'bg-[#FCE7F1]'}`}
              >
                <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                <p className="text-sm text-gray-700">{plan.price}</p>
                <p className="text-xs text-gray-500 mt-1">No credit card required.</p>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, featureIndex) => (
            // Each row is now its own grid container with rounded corners
            <div 
              key={feature.name} 
              className={`grid grid-cols-[2fr_1fr_1fr_1fr] rounded-2xl overflow-hidden ${
                featureIndex % 2 === 0 ? 'bg-[#1A3E2F]' : 'bg-transparent'
              }`}
            >
              <div className="p-4 flex items-center">
                <span className={featureIndex % 2 === 0 ? 'text-white' : 'text-black'}>{feature.name}</span>
              </div>
              <div className="flex items-center justify-center p-4">
                {feature.basic && <Checkmark colorClass="text-green-300" />}
              </div>
              <div className={`flex items-center justify-center p-4 ${featureIndex % 2 === 0 && 'bg-[#EA337E]'}`}>
                {feature.standard && <Checkmark colorClass={featureIndex % 2 === 0 ? 'text-pink-200' : 'text-pink-500'} />}
              </div>
              <div className="flex items-center justify-center p-4">
                {feature.premium && <Checkmark colorClass="text-green-300" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
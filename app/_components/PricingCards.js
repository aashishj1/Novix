import { ArrowUpRight } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$500 – $1,000",
    frequency: "/ Month",
    features: [
      "Full custom website design",
      "Advance development",
      "Complex features (e-commerce)",
      "Complete branding overhaul",
      "Multi-platform integration",
      "Full content creation",
      "Ongoing maintenance and support",
    ],
    isPopular: false,
  },
  {
    title: "Standard",
    price: "$500 – $1,000",
    frequency: "/ Month",
    features: [
      "Full custom website design",
      "Advance development",
      "Complex features (e-commerce)",
      "Complete branding overhaul",
      "Multi-platform integration",
      "Full content creation",
      "Ongoing maintenance and support",
      "Comprehensive SEO strategy",
    ],
    isPopular: true,
  },
  {
    title: "Premium",
    price: "$5,000+",
    frequency: "/ Month",
    features: [
      "Full custom website design",
      "Advance development",
      "Complex features (e-commerce)",
      "Complete branding overhaul",
      "Multi-platform integration",
      "Full content creation",
      "Ongoing maintenance and support",
      "Comprehensive SEO strategy",
      "Dedicated account manager",
      "CMS integration",
    ],
    isPopular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="bg-[#FCE7F1] py-20 px-4">
      {/* Added 'md:items-start' to allow cards to have their own height */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:items-start">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col p-8 rounded-3xl text-white ${
              plan.isPopular 
                ? 'bg-[#F9A8CD]' // Standard card has the new pink background
                : 'bg-[#1A3E2F]'
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <h3 className={`text-5xl font-bold mb-2 ${
                plan.isPopular
                  ? 'text-[#EA337E]' // Standard heading is now white
                  : 'text-[#D9ECD8]'
              }`}>
                {plan.title}
              </h3>
              <p className="text-lg text-white">
                {plan.price}
                <span className="opacity-70">{plan.frequency}</span>
              </p>
            </div>

            {/* Features - Removed 'flex-grow' to allow auto height */}
            <ul className="space-y-3 text-base text-white">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Footer Buttons */}
            <div className="mt-10 flex items-center gap-4">
              <button className="bg-[#D9ECD8] w-12 h-12 rounded-full flex items-center justify-center text-[#1A3E2F] hover:opacity-90 transition">
                <ArrowUpRight size={24} />
              </button>
              <button className="bg-[#D9ECD8] flex-grow text-[#1A3E2F] font-bold py-3 px-6 rounded-full hover:opacity-90 transition">
                SELECT PLAN
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
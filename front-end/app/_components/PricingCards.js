import { Check, ArrowUpRight, Star } from "lucide-react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$500 - $1,000",
    frequency: "/ Month",
    color: "from-emerald-600 to-emerald-700",
    borderColor: "border-emerald-200",
    features: [
      "Full custom website design",
      "Advance development",
      "Complex features (e-commerce)",
      "Complete branding overhaul",
      "Multi-platform integration",
      "Full content creation",
      "Ongoing maintenance and support",
    ],
    buttonLabel: "Select Plan",
    popular: false,
  },
  {
    title: "Standard",
    price: "$500 - $1,000",
    frequency: "/ Month",
    color: "from-rose-500 to-pink-600",
    borderColor: "border-rose-200",
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
    buttonLabel: "Select Plan",
    popular: true,
  },
  {
    title: "Premium",
    price: "$5,000+",
    frequency: "/ Month",
    color: "from-emerald-600 to-emerald-700",
    borderColor: "border-emerald-200",
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
    buttonLabel: "Select Plan",
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your business needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-rose-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 font-medium">
                      {plan.frequency}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group`}
                >
                  {plan.buttonLabel}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <button className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-200">
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </section>
  );
}

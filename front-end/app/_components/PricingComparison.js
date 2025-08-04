import { Check, X, Star } from "lucide-react";

export default function PricingComparison() {
  const plans = [
    { name: "Basic", color: "emerald", popular: false },
    { name: "Standard", color: "rose", popular: true },
    { name: "Premium", color: "emerald", popular: false },
  ];

  const features = [
    { name: "1-on-1 Sessions", basic: true, standard: true, premium: true },
    { name: "Confidential Chat", basic: true, standard: true, premium: true },
    { name: "Therapist Match", basic: false, standard: true, premium: true },
    { name: "24/7 Support", basic: false, standard: false, premium: true },
    { name: "Weekly Reports", basic: false, standard: true, premium: true },
    { name: "Mobile Access", basic: true, standard: true, premium: true },
  ];

  const getColorClasses = (color, popular) => {
    if (popular) {
      return {
        header: "bg-gradient-to-r from-rose-500 to-pink-600 text-white",
        badge: "bg-rose-500",
      };
    }
    return {
      header: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
      badge: "bg-emerald-500",
    };
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare our plans and find the perfect fit for your needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-4 gap-0">
            <div className="p-6 bg-gray-50 border-r border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            </div>
            {plans.map((plan, index) => {
              const colors = getColorClasses(plan.color, plan.popular);
              return (
                <div key={index} className="relative p-6 text-center">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.header} mb-3`}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="divide-y divide-gray-100">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-0 hover:bg-gray-50/50 transition-colors duration-200"
              >
                <div className="p-6 border-r border-gray-200 bg-gray-50/30">
                  <span className="font-medium text-gray-900">
                    {feature.name}
                  </span>
                </div>

                <div className="p-6 text-center border-r border-gray-100">
                  {feature.basic ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <X className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="p-6 text-center border-r border-gray-100">
                  {feature.standard ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100">
                      <Check className="w-5 h-5 text-rose-600" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <X className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="p-6 text-center">
                  {feature.premium ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <X className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-0 p-6 bg-gray-50/30">
            <div className="border-r border-gray-200"></div>
            {plans.map((plan, index) => {
              const colors = getColorClasses(plan.color, plan.popular);
              return (
                <div key={index} className="px-4">
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white ${colors.header} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden mt-8 space-y-6">
          {plans.map((plan, planIndex) => {
            const colors = getColorClasses(plan.color, plan.popular);
            return (
              <div
                key={planIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative p-6 text-center">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.header} mb-3`}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {plan.name}
                  </h3>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  {features.map((feature, featureIndex) => {
                    const hasFeature = feature[plan.name.toLowerCase()];
                    return (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700">{feature.name}</span>
                        {hasFeature ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                            <X className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <button
                    className={`w-full mt-6 py-3 px-6 rounded-xl font-semibold text-white ${colors.header} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include our core features and 30-day money-back guarantee
          </p>
          <button className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-200">
            View detailed feature breakdown
          </button>
        </div>
      </div>
    </section>
  );
}

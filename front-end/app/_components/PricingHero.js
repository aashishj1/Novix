"use client";

import { Check, Zap, Star, Sparkles } from "lucide-react";
import { useState } from "react";

export default function PricingHero() {
  const [billingCycle, setBillingCycle] = useState("yearly");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-rose-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-rose-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-rose-100">
          <Sparkles className="w-4 h-4" />
          Choose Your Perfect Plan
          <Star className="w-4 h-4 fill-current" />
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 leading-none">
            <span className="block">PRICING</span>
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              PLAN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent pricing that grows with you. Choose the plan
            that fits your needs perfectly.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex items-center gap-4">
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>

            <div className="relative">
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "yearly" ? "monthly" : "yearly"
                  )
                }
                className={`relative w-20 h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rose-200 ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    billingCycle === "yearly"
                      ? "translate-x-11"
                      : "translate-x-1"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {billingCycle === "yearly" ? (
                      <Zap className="w-4 h-4 text-rose-600" />
                    ) : (
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>
            </div>

            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
          </div>

          {/* Savings Badge */}
          {billingCycle === "yearly" && (
            <div className="animate-bounce">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Check className="w-4 h-4" />
                Save up to 25% with yearly billing
              </div>
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Check, text: "No hidden fees" },
            { icon: Zap, text: "Instant activation" },
            { icon: Star, text: "30-day money back" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:bg-white/80 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm font-medium">Scroll to see plans</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

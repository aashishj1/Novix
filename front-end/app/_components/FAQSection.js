'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const faqData = [
  {
    question: "What is Novix and how does it work?",
    answer: "Novix is a comprehensive mental wellness platform offering personalized therapy, self-care tools, and community support. It works by matching you with the right therapist and providing resources to support your journey.",
  },
  {
    question: "Is my information confidential and secure?",
    answer: "Absolutely. We use industry-standard encryption and follow strict privacy protocols to ensure all your data and conversations are completely secure and confidential.",
  },
  {
    question: "How do I get matched with a therapist?",
    answer: "After signing up, you'll answer a short questionnaire about your needs and preferences. Our algorithm then suggests the best-matched licensed therapists for you to choose from.",
  },
  {
    question: "Can I switch therapists if it's not a good fit?",
    answer: "Yes, you can switch to a new therapist at any time at no extra cost. We believe the right therapeutic relationship is key to your progress and want to ensure you find the perfect fit.",
  },
  {
    question: "What kind of self-care tools do you offer?",
    answer: "We offer a wide range of tools including a mood tracker, guided meditations, breathing exercises, a digital journal, and personalized self-care checklists to support you between sessions.",
  },
  {
    question: "How much does Novix cost?",
    answer: "We offer several pricing plans to fit different needs and budgets, including options for individual sessions and monthly subscriptions. You can view all our plans on the pricing page.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative bg-white py-20 px-4 min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-10">FAQ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`faq-card-${index}`}
              onClick={() => setActiveIndex(index)}
              className="bg-gray-800 text-white font-semibold p-5 rounded-2xl cursor-pointer"
              style={{ borderRadius: 16 }}
            >
              <motion.h3 layoutId={`faq-question-${index}`}>{item.question}</motion.h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              layoutId={`faq-card-${activeIndex}`}
              className="bg-gray-800 w-full max-w-3xl p-10 rounded-3xl"
              style={{ borderRadius: 24 }}
            >
              <motion.h3
                layoutId={`faq-question-${activeIndex}`}
                className="text-3xl font-bold text-white mb-6"
              >
                {faqData[activeIndex].question}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                {faqData[activeIndex].answer}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={28} />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
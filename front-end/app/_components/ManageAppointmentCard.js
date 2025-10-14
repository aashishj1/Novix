"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import SchedulePicker from "./SchedulePicker"; // Ensure this path is correct
import CancelButton from "./CancelButton"; // Import the new CancelButton component

// Initialize fonts
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const cancellationReasons = [
  { id: 1, text: "I'm feeling nervous and unsure if therapy is right for me.", details: "Feeling nervous is completely normal. Your first session is just a simple, pressure-free conversation — no deep dives unless you’re ready. You control the pace, always. Need more help? 24/7 Support. Chat with us anytime. " },
  { id: 2, text: "I'm not sure if I can trust opening up to someone yet." },
  { id: 3, text: "I'm worried about the cost or if I'll have to keep coming forever." },
  { id: 4, text: "My problems aren't 'big enough' for therapy." },
  { id: 5, text: "I don't know if therapy will actually help me." },
];

export default function ManageAppointmentCard() {
  const [showSchedulePicker, setShowSchedulePicker] = useState(false);
  const [showCancelFlow, setShowCancelFlow] = useState(false);
  const [cancelStep, setCancelStep] = useState(0); // 0: initial, 1: sure?, 2: motivation, 3: reasons
  const [selectedReason, setSelectedReason] = useState(null);
  const [refundAmount, setRefundAmount] = useState(0); // Example refund amount

  const getRefundAmount = () => {
    return 80.00; // Example full refund
  };

  const handleCancelClick = () => {
    setShowCancelFlow(true);
    setCancelStep(1); 
    setRefundAmount(getRefundAmount());
  };

  const handleReasonSelect = (reasonId) => {
    setSelectedReason(reasonId);
  };

  const handleFinalCancel = () => {
    alert(`Session cancelled! You will receive a refund of $${refundAmount.toFixed(2)}.`);
    setShowCancelFlow(false);
    setCancelStep(0);
    setSelectedReason(null);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 ml-12">
        
        {/* --- Card 1: Reschedule Session (conditionally rendered) --- */}
        {!showCancelFlow && (
          <motion.div
            layout
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            className={`p-10 rounded-3xl shadow-lg ${nunitoSans.className} ${
              showSchedulePicker ? "bg-blue-200 col-span-2" : "bg-blue-100"
            }`}
          >
            <AnimatePresence mode="wait">
              {showSchedulePicker ? (
                <motion.div
                  key="picker"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className={`text-4xl font-bold text-black mb-6 ${plusJakartaSans.className}`}>
                    Pick a New Date
                  </h2>
                  <SchedulePicker bgClassName="bg-transparent" />
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowSchedulePicker(false)}
                      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold shadow-md"
                    >
                      Back
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className={`text-4xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                    Reschedule Session
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Need a better time? Reschedule your session without losing your slot.
                  </p>
                  <h3 className={`text-xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                    What happens next:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                    <li>You'll see your therapist's upcoming availability</li>
                    <li>Select a new date and time that works for you</li>
                    <li>We'll update the session instantly and notify your therapist</li>
                  </ul>
                  <h3 className={`text-xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                    Note:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                    <li>Free if done at least 24 hours before</li>
                    <li>Late reschedules may have partial fees</li>
                  </ul>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowSchedulePicker(true)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Click here
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* --- Card 2: Cancel Session --- */}
        <motion.div
          layout
          transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
          className={`p-10 rounded-3xl shadow-lg ${nunitoSans.className} ${
            showCancelFlow ? "bg-purple-100 col-span-2" : "bg-purple-100"
          }`}
          style={{ minHeight: showCancelFlow ? '600px' : 'auto' }}
        >
          <AnimatePresence mode="wait">
            {showCancelFlow ? (
              <motion.div key="cancel-flow-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {cancelStep === 1 && (
                  <div className="flex flex-col items-center justify-center min-h-[400px] bg-purple-100">
                    <h2 className={`text-5xl font-extrabold text-black text-center mb-2 ${plusJakartaSans.className}`}>Cancel Session</h2>
                    <p className="text-gray-600 text-center mb-8">Not ready for a session right now? You can cancel anytime.</p>
                    <p className={`text-3xl font-bold text-black text-center mb-16 ${plusJakartaSans.className}`}>Are you sure you want to cancel this session?</p>
                    <div className="flex justify-center gap-10">
                      <button
                        onClick={() => setCancelStep(2)}
                        className={`relative group h-[80px] px-10 rounded-full bg-green-900 text-white text-4xl font-extrabold ${plusJakartaSans.className} overflow-hidden shadow-lg transition-all duration-300 ease-in-out`}
                      >
                        <span className="relative z-10">Not Sure</span>
                        <span
                          className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full transition-all duration-[1500ms] ease-out group-hover:scale-[500] -translate-x-1/2 translate-y-1/2"
                          style={{ background: 'radial-gradient(circle, #45E38F 30%, transparent 70%)' }}
                        ></span>
                      </button>
                      <CancelButton onClick={() => setCancelStep(3)} />
                    </div>
                  </div>
                )}

                {cancelStep === 2 && (
                  <div className="flex flex-col items-center justify-center min-h-[400px] bg-purple-100">
                    <h2 className={`text-5xl font-extrabold text-black text-center mb-6 ${plusJakartaSans.className}`}>
                      Not Canceling The Session Will Be<br/>Worthy You<br/>This Is Our Promise
                    </h2>
                    <div className="flex justify-center mt-10">
                      <CancelButton onClick={() => setCancelStep(3)} />
                    </div>
                  </div>
                )}

                {cancelStep === 3 && (
                  <div className="bg-purple-100">
                    <h2 className={`text-5xl font-extrabold text-black text-center mb-2 ${plusJakartaSans.className}`}>Cancel Session</h2>
                    <p className="text-gray-600 text-center mb-8">Not ready for a session right now? You can cancel anytime.</p>
                    <p className={`text-3xl font-bold text-black text-center mb-10 ${plusJakartaSans.className}`}>Are you sure you want to cancel this session?</p>
                    <div className="space-y-4 max-w-2xl mx-auto">
                      {cancellationReasons.map(reason => (
                        <div
                          key={reason.id}
                          onClick={() => handleReasonSelect(reason.id)}
                          className={`p-6 rounded-xl cursor-pointer transition-all duration-300 min-h-[70px] flex items-start ${selectedReason === reason.id ? 'bg-green-900 text-white' : 'bg-green-800 text-white/90'} hover:bg-green-900 shadow-md`}
                        >
                          <span className={`w-4 h-4 rounded-full mr-4 mt-1.5 flex-shrink-0 ${selectedReason === reason.id ? 'bg-pink-500' : 'bg-gray-400'}`}></span>
                          <div className="flex-1">
                            <p className={`font-semibold text-lg ${nunitoSans.className}`}>{reason.text}</p>
                            {selectedReason === reason.id && reason.details && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="text-sm mt-3 pt-3 border-t border-white/20">
                                <p className={`${nunitoSans.className} leading-relaxed`}>{reason.details}</p>
                                {reason.id === 1 && (<p className="mt-3">Need more help? 24/7 Support. Chat with us anytime. <a href="#" className="underline text-pink-300 font-bold">click to Talk to support</a></p>)}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-12">
                      {selectedReason && (
                        <p className={`text-3xl font-bold text-black mb-6 ${plusJakartaSans.className}`}>
                          You will be refunded: ${refundAmount.toFixed(2)}
                        </p>
                      )}
                      <button
                        onClick={handleFinalCancel}
                        className={`group flex items-center justify-center gap-2 h-[80px] px-10 rounded-full bg-white border-[3px] border-gray-800 text-gray-800 text-4xl font-extrabold ${plusJakartaSans.className} hover:border-green-600 hover:text-green-600 transition-all duration-300 ease-in-out shadow-md mx-auto`}
                      >
                        <span>Cancel It</span>
                        <div className="relative w-8 h-8 flex items-center justify-center">
                          <div className="absolute inset-0 transition-opacity duration-1000 opacity-100 group-hover:opacity-0">
                            <Image src="/Circle-Top-Up--Streamline-Solar idea.svg" alt="Icon" layout="fill" objectFit="contain" />
                          </div>
                          <div className="absolute inset-0 transition-all duration-1000 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100">
                            <Image src="/Circle-Top-Up--Streamline-Solar hover.svg" alt="Hover Icon" layout="fill" objectFit="contain" />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div key="cancel-initial-info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className={`text-4xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                  Cancel Session
                </h2>
                <p className="text-gray-600 mb-6">
                  Not ready for a session right now? You can cancel anytime.
                </p>
                <h3 className={`text-xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                  What happens next:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                  <li>Your session will be canceled</li>
                  <li>You'll receive a confirmation via email/SMS</li>
                  <li>If eligible, refund will be processed automatically</li>
                </ul>
                <h3 className={`text-xl font-bold text-black mb-2 ${plusJakartaSans.className}`}>
                  Note:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                  <li>Full refund if canceled at least 24 hours in advance</li>
                  <li>
                    Partial/no refund if canceled late (check{" "}
                    <a href="#" className="underline text-purple-700 font-semibold">
                      Policy
                    </a>
                    )
                  </li>
                </ul>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleCancelClick}
                    className="text-purple-700 font-semibold hover:underline"
                  >
                    Click here to cancel
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
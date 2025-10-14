'use client';

import { useState, useEffect } from 'react';
import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function SchedulePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  useEffect(() => {
    setSelectedDate(new Date().getDate());
  }, []);

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() + 6) % 7;
  
  const emptySlots = Array.from({ length: firstDayOfMonth });
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const timeSlots = [
    "9:00 AM - 9:50 AM",
    "10:00 AM - 10:50 AM",
    "11:00 AM - 11:50 AM",
    "1:00 PM - 1:50 PM",
    "2:00 PM - 2:50 PM",
  ];

  const handleSlotClick = (index) => {
    setSelectedSlot(selectedSlot === index ? null : index);
  };

  const getConfirmationText = () => {
    if (selectedSlot === null) return "";
    const time = timeSlots[selectedSlot].split(' ')[0];
    const date = `${selectedDate}-${currentDate.getMonth() + 1}-${year}`;
    return `lets confirm your session on "${date}" at "${time}"`;
  };

  return (
    <div className="flex flex-col items-center space-y-12 p-6 w-full max-w-7xl">
      <h1 className={`text-7xl font-extrabold text-center text-black ${plusJakartaSans.className}`}>
        Choose Your Perfect Time
      </h1>

      <div className="flex flex-col md:flex-row gap-16 w-full items-start">
        <div className={`bg-[#053F23] text-white rounded-3xl p-8 w-full md:w-[640px] flex-shrink-0 ${plusJakartaSans.className}`}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-4xl">Schedule It</h2>
            <span className="font-bold text-xl">{monthName} {year}</span>
          </div>
          <div className="grid grid-cols-7 gap-4 text-center font-bold text-xl text-white/70 mb-4">
            {["M", "T", "W", "T", "F", "S", "S"].map((day) => (<div key={day}>{day}</div>))}
          </div>
          <motion.div layout className="grid grid-cols-7 gap-4">
            {emptySlots.map((_, index) => <div key={`empty-${index}`} />)}
            {daysArray.map((day) => {
              const date = new Date(year, currentDate.getMonth(), day);
              const isPastDate = date < today;
              const isSelected = selectedDate === day;
              return (
                <motion.div 
                  key={day} 
                  className="relative flex items-center justify-center"
                  whileHover={{ scale: isPastDate ? 1 : 1.1 }}
                  whileTap={{ scale: isPastDate ? 1 : 0.95 }}
                >
                  {/* The moving pink dot */}
                  {isSelected && (
                    <motion.div
                      layoutId="selected-date-bg"
                      className="absolute w-16 h-16 rounded-full bg-[#EA337E] shadow-inner-white y-500"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => !isPastDate && setSelectedDate(day)}
                    disabled={isPastDate}
                    // Added more shadow for 3D effect and a top border highlight
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-colors text-3xl z-20 
                                border-t border-white/20 shadow-xl shadow-black/40 ${
                      isSelected
                        ? "text-white font-bold"
                        : isPastDate
                        ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                        : "bg-[#f8f5f0] text-black"
                    }`}
                  >
                    {day}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex flex-col space-y-5 w-full flex-1">
          <div className={`text-black font-bold text-4xl mb-7 ${plusJakartaSans.className}`}>
             Selected Date: {selectedDate}-{currentDate.getMonth() + 1}-{year}
          </div>
          {timeSlots.map((slot, idx) => (
            <div key={idx} className="h-[80px]"> 
              <AnimatePresence mode="wait">
                {selectedSlot === idx ? (
                  <motion.div
                    key="selected"
                    layoutId={`slot-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0 } }}
                    onClick={() => handleSlotClick(idx)}
                    className="cursor-pointer h-full relative"
                  >
                    <div className="h-full bg-[#EA337E] text-white rounded-full flex items-center pl-8 pr-48">
                      <span className={`font-bold text-md whitespace-nowrap ${nunitoSans.className}`}>
                        {getConfirmationText()}
                      </span>
                    </div>
                    <motion.button 
                      layout 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#053F23] text-white text-md font-semibold py-3 px-5 rounded-full hover:bg-black"
                    >
                      make payment
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="unselected"
                    layoutId={`slot-${idx}`}
                    whileHover={{ scale: 1.0, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                    onClick={() => handleSlotClick(idx)}
                    className={`w-full h-full text-left border border-gray-400 text-black rounded-full px-8 py-5 text-xl bg-[#f8f5f0] hover:bg-[#f8f5f0] ${nunitoSans.className}`}
                  >
                    {slot}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
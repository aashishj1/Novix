"use client"

import { useState } from "react";

export default function SchedulePicker() {
  const [selectedDate, setSelectedDate] = useState(8);
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const timeSlots = [
    "9:00 AM - 9:50AM",
    "9:00 AM - 9:50AM",
    "9:00 AM - 9:50AM",
    "9:00 AM - 9:50AM",
  ];

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center">
        Choose Your Perfect Time
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Calendar */}
        <div className="bg-green-900 text-white rounded-lg p-4 w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Schedule It</h2>
            <span>Jan</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
              <div key={day} className="opacity-80">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition
                  ${
                    selectedDate === day
                      ? "bg-pink-500 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex flex-col space-y-3 w-[220px]">
          <div className="text-gray-800 font-medium">
            Monday {selectedDate}-1-25
          </div>
          {timeSlots.map((slot, idx) => (
            <button
              key={idx}
              className="border border-gray-300 text-black rounded-full px-4 py-2 hover:bg-gray-100"
            >
              {slot}
            </button>
          ))}
          <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
}

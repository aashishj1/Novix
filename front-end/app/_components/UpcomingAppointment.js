import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'], // Extrabold
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'], // Regular and Semibold
});

export default function UpcomingAppointment({ appointmentData }) {
  // Using dynamic data passed as props, with fallback defaults
  const appointment = appointmentData || {
    therapist: 'Dr. Aashish Jaiswal',
    date: '26 / 4 / 2005',
    time: '9:00-9:45 PM',
    mode: 'Online video-call',
    sessionType: 'Relationship | couple',
  };

  return (
    // Main container with a clean white background
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className={`text-7xl font-extrabold text-center text-black mb-12 tracking-wide ${plusJakartaSans.className}`}>
          MANAGE YOUR
          <br />
          APPOINTMENT
        </h1>

        {/* Appointment Card */}
        <div className="relative">
          {/* "Up Coming Appointment" tag */}
          <span className="absolute -top-4 left-8 bg-[#1A3E2F] text-white text-lg font-semibold px-6 py-2 rounded-t-lg">
            Up Coming Appointment
          </span>

          {/* Card with a clean solid background matching the image */}
          <div 
            className="mt-4 p-8 rounded-3xl bg-[#B59A89]" // Solid background color
          >
            <div className={`space-y-4 text-2xl font-semibold text-black ${nunitoSans.className}`}>
              {/* Each row for appointment details */}
              <div className="grid grid-cols-3">
                <span className="text-gray-800">Therapist:</span>
                <span className="col-span-2">{appointment.therapist}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-gray-800">Session Date:</span>
                <span className="col-span-2">{appointment.date}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-gray-800">Time:</span>
                <span className="col-span-2">{appointment.time}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-gray-800">Mode:</span>
                <span className="col-span-2">{appointment.mode}</span>
              </div>
              <div className="grid grid-cols-3">
                <span className="text-gray-800">Session Type:</span>
                <span className="col-span-2">{appointment.sessionType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
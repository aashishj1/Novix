import Image from 'next/image';
import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '700'],
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function AppointmentSummary({ booking }) {
  const summary = booking || {
    concern: 'Managing Anxiety',
    therapy: 'Cognitive Behavioral Therapy (CBT)',
    duration: '60 Minute',
    mode: 'Video Call',
    doctor: {
      name: 'Dr. Amerjeet Singh',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      title: 'Psychologist',
      specialty: 'Relationship Expert',
      experience: '10+ Years Experience',
      rating: 4.8,
      reviews: 320,
    },
    date: 'Monday, March 25 | 3:00 PM IST',
    price: '₹1500 Only | No Hidden Charges',
    paymentStatus: 'pending',
  };

  const isPending = summary.paymentStatus === 'pending';

  return (
    <div className="overflow-x-hidden"> {/* prevents horizontal scroll */}
      <div className={`bg-white p-4 mt-10 ${nunitoSans.className}`}>
        <div className="max-w-7xl mx-auto p-2 rounded-3xl">
          <div className="p-8 border border-white rounded-3xl bg-[#F8F5F0] shadow-lg">
            <h1
              className={`text-4xl md:text-6xl font-bold text-center text-black mb-8 ${plusJakartaSans.className}`}
            >
              Your Appointment Summary
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="p-6 border border-[#5B5B5B] rounded-3xl bg-[#f8f5f0] shadow-sm">
                  <p
                    className={`text-2xl md:text-3xl font-extralight text-gray-500 ${plusJakartaSans.className}`}
                  >
                    Concern
                  </p>
                  <p className="text-lg font-semibold text-black">{summary.concern}</p>

                  <p
                    className={`text-2xl md:text-3xl font-extralight text-gray-500 mt-4 ${plusJakartaSans.className}`}
                  >
                    Therapy
                  </p>
                  <p className="text-xl font-semibold text-black">{summary.therapy}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 border border-[#5B5B5B] rounded-3xl bg-[#f8f5f0] shadow-sm">
                    <p
                      className={`text-2xl md:text-3xl font-extralight text-gray-500 ${plusJakartaSans.className}`}
                    >
                      Duration
                    </p>
                    <p className="text-xl font-semibold text-black">{summary.duration}</p>
                  </div>

                  <div className="p-6 border border-[#5B5B5B] rounded-3xl bg-[#f8f5f0] shadow-sm">
                    <p
                      className={`text-2xl md:text-3xl font-extralight text-gray-500 ${plusJakartaSans.className}`}
                    >
                      Mode
                    </p>
                    <p className="text-xl font-semibold text-black">{summary.mode}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Doctor Card */}
              <div className="p-6 border border-[#5B5B5B] rounded-3xl bg-[#f8f5f0] shadow-sm">
                <p
                  className={`text-2xl md:text-3xl font-extralight text-gray-500 mb-4 ${plusJakartaSans.className}`}
                >
                  Doctor
                </p>

                <div className="flex items-center gap-6">
                  <Image
                    src={summary.doctor.image}
                    alt={summary.doctor.name}
                    width={140}
                    height={140}
                    className="rounded-full border-0 border-white shadow-xl"
                  />

                  <div className="flex-1">
                    <h3
                      className={`text-2xl md:text-3xl font-bold text-black mb-1 ${plusJakartaSans.className}`}
                    >
                      {summary.doctor.name}
                    </h3>
                    <p className="text-gray-600">{summary.doctor.title}</p>
                    <p className="text-gray-600">{summary.doctor.specialty}</p>
                    <p className="text-gray-600">{summary.doctor.experience}</p>
                    <p className="mt-3 text-lg text-red-500 font-bold">
                      ⭐ {summary.doctor.rating}/5{' '}
                      <span className="text-gray-400">({summary.doctor.reviews})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Rows */}
            <div className="space-y-4">
              <div className="p-6 border border-[#5B5B5B] rounded-3xl bg-[#f8f5f0] shadow-sm">
                <p
                  className={`text-2xl md:text-3xl font-extralight text-gray-500 mb-1 ${plusJakartaSans.className}`}
                >
                  Date
                </p>
                <p className="text-xl font-semibold text-black">{summary.date}</p>
              </div>

              <div className="p-6 border border-[#5B5B5B] rounded-3xl flex justify-between items-center bg-[#f8f5f0] shadow-sm">
                <div>
                  <p
                    className={`text-2xl md:text-3xl font-extralight text-gray-500 mb-1 ${plusJakartaSans.className}`}
                  >
                    Price
                  </p>
                  <p className="text-xl font-semibold text-black">{summary.price}</p>
                </div>

                {isPending && (
                  <span className="bg-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full scale-[1.1] inline-block">
                    Payment Pending
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
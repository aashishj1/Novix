import { Plus_Jakarta_Sans, Nunito_Sans } from 'next/font/google';

// Initialize the fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'], // Bold
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400'], // Regular
});

export default function HelpSection() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Added a subtle grey border at the top of the entire section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-gray-300 pt-12"> 
        <div className="space-y-12">
          {/* 100% Safe & Private Section */}
          <div>
            <h2 className={`text-4xl font-bold text-black pb-2 border-b-2 border-black inline-block ${plusJakartaSans.className}`}>
              100% Safe & Private
            </h2>
            <div className={`mt-4 space-y-2 text-gray-700 ${nunitoSans.className}`}>
              <p>Your session and data are completely confidential.</p>
              <p>We follow the highest standards of data privacy and mental health ethics.</p>
            </div>
          </div>

          {/* Need Help Section */}
          <div>
            <h2 className={`text-4xl font-bold text-black pb-2 border-b-2 border-black inline-block ${plusJakartaSans.className}`}>
              Need Help
            </h2>
            <div className={`mt-4 text-gray-700 ${nunitoSans.className}`}>
              <p>
                24/7 Support: Need help? Chat with us anytime.
                <br />
                click to <a href="#" className="text-orange-600 font-bold hover:underline">Talk to support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="relative w-full text-gray-900 overflow-hidden">
      {/* Main Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16">
        {/* Top Banner / Hero */}
        <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-8 rounded-2xl shadow-xl mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hey, We Are There For You Only
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Your well-being is our priority. Reach out anytime, we&apos;tre ready to
            listen.
          </p>
        </div>

        {/* Get In Touch Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Have questions, feedback, or need support? Reach out to us, and
            we&apos;tll get back to you ASAP.
          </p>

          {/* Form UI */}
          <div className="max-w-4xl mx-auto  rounded-2xl p-8 md:p-10 border border-gray-700 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base text-gray-800 placeholder-transparent"
                id="name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-2.5 text-gray-600 text-sm  px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                WHAT’S YOUR NAME ?
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base text-gray-800 placeholder-transparent"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 text-gray-600 text-sm  px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                WHAT’S YOUR EMAIL? *
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base text-gray-800 placeholder-transparent"
                id="mobile"
              />
              <label
                htmlFor="mobile"
                className="absolute left-4 -top-2.5 text-gray-600 text-sm  px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                WHAT’S YOUR MOBILE NUMBER ?
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base text-gray-800 placeholder-transparent"
                id="category"
              />
              <label
                htmlFor="category"
                className="absolute left-4 -top-2.5 text-gray-600 text-sm  px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                WHAT’S YOUR CATEGORY ?
              </label>
            </div>
            <div className="relative">
              <textarea
                placeholder=" "
                rows={4}
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base text-gray-800 placeholder-transparent resize-none"
                id="query"
              />
              <label
                htmlFor="query"
                className="absolute left-4 -top-2.5 text-gray-600 text-sm  px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                DESCRIBE YOUR QUERY ?
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button className="mt-6 w-[20vw] px-8 py-4 bg-[#00a550] text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>
          </div>
        </section>

        {/* Contact Links Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            CONTACT LINKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us by email and we&apos;ll respond shortly. We aim to reply
                within 24 hours.
              </p>
            </div>
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Phone No</h3>
              <p className="text-gray-600 leading-relaxed">
                Call us on weekdays from 9 AM to 5 PM (EST) for immediate
                assistance.
              </p>
            </div>
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                We are not accepting any personal office visits at this time.
                All support is online.
              </p>
            </div>
          </div>
        </section>

        {/* Social Icons */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-8 text-gray-700">
            <a
              href="#"
              aria-label="Facebook"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-black hover:bg-blue-50"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-black hover:bg-blue-50"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-black hover:bg-red-50"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-black hover:bg-pink-50"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-black hover:bg-blue-50"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;

import {
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
  Star,
  Shield,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const OurStory = () => {
  return (
    <div className="relative w-full text-center overflow-hidden">
      <div className="relative px-6 sm:px-12 py-16">
        {/* NOVIX Logo Section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-extrabold mb-6 leading-none">
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
              NOVIX
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in mental wellness and personal transformation
          </p>
        </div>

        {/* A Shared Journey Section */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className=" rounded-3xl p-8 md:p-12 border-white/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Shared Journey
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At Novix, we believe that mental well-being isn&apos;t just a
              service—it&apos;s a shared journey. We&apos;re not here to stand apart from
              you; we&apos;re here to walk beside you every step of the way. Novix is
              your brand, built on trust, empathy, and a genuine passion for
              transformation. Together, we create a space where every challenge
              is met with understanding and every victory is celebrated as a
              collective triumph.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Trust", "Empathy", "Transformation"].map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story, Your Story Section */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className=" p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story, Your Story
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Our journey began with a simple belief: that every individual
              deserves a safe, supportive environment to explore and nurture
              their mental health. From our humble beginnings to our growth into
              a trusted haven for thousands, every milestone has been powered by
              you—your courage, your resilience, and your unwavering spirit.
            </p>

            <div className="bg-white/80 rounded-2xl p-6 mb-6">
              <p className="text-lg text-gray-700 italic">
                &quot;When you choose Novix, you&apos;re not just selecting a service;
                you&apos;re becoming a part of a community that writes its own story,
                where every chapter is filled with hope and transformation.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/60 rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-1">
                  10,000+
                </div>
                <div className="text-sm text-gray-600">Lives Transformed</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="text-2xl font-bold text-pink-600 mb-1">
                  5 Years
                </div>
                <div className="text-sm text-gray-600">Of Excellence</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Stand Apart Section */}
        <section className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Stand Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Novix your ideal partner in mental wellness
              and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {/* Card 1 */}
            <div className="group relative bg-[#3cb371] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">
                  A Partnership in Progress
                </h3>
                <p className="text-white leading-relaxed mb-6">
                  Discover a transformative experience with therapy sessions
                  designed specifically for your unique path. Our experts don&apos;t
                  just treat symptoms—they empower you with the tools to rewrite
                  your narrative.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium text-white">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-white" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#f42e9e]  p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">
                  Innovative Self-Help Tools
                </h3>
                <p className="leading-relaxed mb-6 text-white">
                  Access cutting-edge digital tools and resources designed to
                  support your mental wellness journey. From mood tracking to
                  guided meditations, we provide everything you need to thrive.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium text-white">
                    Explore Tools
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-white" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#3cb371] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">
                  Inspiring Community & Learning
                </h3>
                <p className="leading-relaxed mb-6 text-white">
                  Join a supportive community of individuals on similar
                  journeys. Share experiences, learn from others, and grow
                  together in a safe, judgment-free environment.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium text-white">
                    Join Community
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;

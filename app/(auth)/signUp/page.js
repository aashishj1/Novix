import Image from "next/image";

function Page() {
  return (
    <div className="w-full min-h-screen flex bg-[#F2ECE2]">
      {/* Left Side */}
      <div className="flex flex-col justify-between px-10 py-8 w-1/2 relative">
        <div>
          <h1 className="text-6xl font-extrabold text-black">Novix</h1>
          <p className="text-sm text-gray-700 ml-1 mt-1">your own platform</p>
          <div className="w-44 h-1 bg-gray-300 mt-1 ml-1"></div>
        </div>
        {/* Increased image size */}
        <Image
          src="/try.png"
          alt="Character"
          width={600}
          height={700}
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center m-[20px]">
        {/* Increased form width */}
        <div className="bg-white shadow-lg rounded-[40px] px-10 py-12 w-[500px]">
          <h2 className="text-center text-3xl font-medium mb-1">Hi There!</h2>
          <h1 className="text-center text-3xl font-bold mb-1">Create an Account</h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Join us to continue your journey.
          </p>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name
            </label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fa fa-user text-gray-500" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Mobile Number
            </label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fa fa-phone text-gray-500" />
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email Address
            </label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fa fa-envelope text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fa fa-lock text-gray-500" />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none w-full text-sm"
              />
              <i className="fa fa-eye text-gray-400 cursor-pointer" />
            </div>
          </div>

          <button className="w-full bg-[#CEE3CC] text-[#1A3E2F] font-semibold py-2 rounded-full my-4 flex justify-center items-center gap-2">
            Sign Up <i className="fa fa-arrow-right" />
          </button>

          <div className="text-center text-xs font-extrabold uppercase text-gray-500 mb-4">
            or
          </div>

          <button className="w-full bg-black text-white font-semibold py-2 rounded-full flex justify-center items-center gap-3">
            <Image
              alt="google-logo"
              src="/Vector.png"
              width={18}
              height={18}
            />
            Sign Up With Google
          </button>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <span className="text-[#1A3E2F] italic underline font-bold cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
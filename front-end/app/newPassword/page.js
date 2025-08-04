import Image from "next/image";

function page() {
  return (
    <div className="w-full min-h-screen flex font-['Nunito_Sans'] bg-[#F2ECE2]">
      {/* Left Side */}
      <div className="flex flex-col justify-between px-10 py-8 w-1/2 relative">
        <div>
          <h1 className="text-6xl font-extrabold text-black">Novix</h1>
          <p className="text-sm text-gray-700 ml-1 mt-1">your own platform</p>
          <div className="w-44 h-1 bg-gray-300 mt-1 ml-1"></div>
        </div>
        <Image
          src="/try.png"
          alt="Character"
          className=""
          width={500}
          height={600}
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-[40px] px-10 py-12 w-[400px]">
          <h2 className="text-center text-3xl font-medium mb-1">Change Your</h2>
          <h1 className="text-center text-3xl font-bold mb-1">Password</h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Let make the new better password
          </p>

          {/* Email Input */}

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              New Password
            </label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fa fa-envelope text-gray-500" />
              <input
                type="password"
                placeholder="Enter your email address / phone no"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Confirm Password
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

          {/* Login Button */}
          <button className="w-full bg-[#CEE3CC] text-[#1A3E2F] font-semibold py-2 rounded-full mb-4 flex justify-center items-center gap-2">
            Save and sign-in <i className="fa fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

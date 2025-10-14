import React from 'react';

// --- Mock Data for Therapist Cards ---
const therapists = [
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png', // Replace with your image path
    availableToday: true,
  },
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png',
  },
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png',
  },
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png',
    availableToday: true, // Example of another available therapist
  },
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png',
  },
  {
    name: 'Dr. Amerjeet Singh',
    specialty: 'Relationship Expert',
    rating: 4.8,
    reviews: 320,
    imageUrl: '/path-to-your-image/doctor-turban.png',
  },
];

// --- SVG Icon Components ---
const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const DropdownArrowIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);


// --- Main Component ---
const TherapistFilter = () => {
  return (
    <div className="bg-white min-h-screen p-8 pl-10 font-sans flex gap-12"> {/* Increased left padding for alignment */}
      {/* Left Sidebar (Filters Panel) */}
      <aside className="w-[300px] flex-shrink-0 bg-[#0D3B24] text-white rounded-3xl p-6 flex flex-col gap-6 shadow-lg">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="hinted search text"
            className="w-full bg-white text-gray-700 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <SearchIcon />
          </div>
        </div>

        {/* Price Range */}
        <div className="mt-2">
          <label className="block text-gray-200 text-sm font-medium mb-2">price</label>
          <div className="relative h-2 bg-gray-600 rounded-full">
            <div className="absolute h-full w-[50%] bg-[#FF4FA1] rounded-full"></div> {/* Example filled range */}
            <div className="absolute left-[calc(50%-8px)] -top-1 w-4 h-4 bg-[#FF4FA1] rounded-full shadow"></div> {/* Slider knob */}
          </div>
          <div className="flex justify-between text-gray-300 text-xs mt-2">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
        
        {/* Dropdown Filters */}
        <div className="relative">
          <select className="w-full bg-white text-gray-700 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm">
            <option className='text-gray-700'>State</option>
            {/* Add more state options here */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <DropdownArrowIcon />
          </div>
        </div>

         <div className="relative">
          <select className="w-full bg-white text-gray-700 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm">
            <option className='text-gray-700'>Language</option>
            {/* Add more language options here */}
          </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <DropdownArrowIcon />
          </div>
        </div>

         <div className="relative">
          <select className="w-full bg-white text-gray-700 rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm">
            <option className='text-gray-700'>Specialization</option>
            {/* Add more specialization options here */}
          </select>
           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <DropdownArrowIcon />
          </div>
        </div>
      </aside>

      {/* Main Content Area (Right Side) */}
      <main className="flex-1">
        <header className="flex items-center mb-10">
  <div className="flex bg-[#0D3B24] text-white rounded-full overflow-hidden shadow-lg">
    <div className="px-10 py-4 bg-[#0D3B24] font-bold text-3xl rounded-l-full border-r border-[#165C35]">
      Therapist
    </div>
    <nav className="flex items-center">
      <a
        href="#"
        className="px-8 py-4 text-black font-semibold bg-white rounded-full mx-2 transition-all duration-200 shadow-sm hover:bg-gray-100"
      >
        New
      </a>
      <a
        href="#"
        className="px-8 py-4 text-white font-semibold hover:bg-[#165C35] rounded-full mx-2 transition-all duration-200"
      >
        Trending
      </a>
      <a
        href="#"
        className="px-8 py-4 text-white font-semibold hover:bg-[#165C35] rounded-full mx-2 transition-all duration-200"
      >
        Top Rated
      </a>
    </nav>
  </div>
</header>


        {/* Therapist Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {therapists.map((therapist, index) => (
            <div 
              key={index} 
              className="group bg-[#0D3B24] rounded-2xl p-4 flex flex-col items-center text-center shadow-lg 
                         transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[#165C35] border-2 border-transparent"
            >
              <div className="w-36 h-36 rounded-lg overflow-hidden mb-4 border-2 border-gray-700 group-hover:border-[#165C35] transition-colors">
                <img src={therapist.imageUrl} alt={therapist.name} className="w-full h-full object-cover" />
              </div>
              {/* Added italic style */}
              <h3 className="text-xl font-bold text-white italic">{therapist.name}</h3>
              <p className="text-sm text-gray-300">{therapist.specialty}</p>
              <p className="text-sm text-gray-300 mt-1">
                {therapist.rating}/5 ({therapist.reviews})
              </p>
              {therapist.availableToday && (
                <span className="mt-3 text-xs font-bold text-[#FF4FA1] bg-[#FF4FA1]/20 px-3 py-1 rounded-full uppercase">
                  AVAILABLE TODAY
                </span>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default TherapistFilter;
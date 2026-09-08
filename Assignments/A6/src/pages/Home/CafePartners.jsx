import React from "react";

const CafePartners = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Image */}
        <div className="h-100 lg:h-screen">
          <img
            src="https://www.twoleavestea.com/cdn/shop/files/Our_Cafe_Wholesale_Partners.webp?v=1773753185&width=1575.0" // apni image ka path yahan do
            alt="Matcha Drink"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-[#2F2D66] flex items-center justify-center   py-16">
          <div className="max-w-xl sm:p-0 p-4 text-center sm:text-start  ">
            <h2 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
              Our Cafe & <br />
              Wholesale Partners
            </h2>

            <p className=" text-gray-200 text-lg mt-8 leading-relaxed">
              From local cafés to national chains, our teas power thousands of
              baristas every day.
            </p>

            <button className="mt-10 hover:bg-transparent border hover:text-white cursor-pointer   bg-white text-gray-800 px-10 py-4 rounded-full text-lg font-medium  transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafePartners;

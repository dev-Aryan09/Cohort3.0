import React from "react";

const features = [
  {
    icon: "https://www.twoleavestea.com/cdn/shop/files/Quality_without_pretense.svg?v=1773116402&width=180.0",
    title: "Quality, We Mean Premium",
  },
  {
    icon: "https://www.twoleavestea.com/cdn/shop/files/care_for_ppl_1.svg?v=1773116330&width=144",
    title: "One for Planet",
  },
  {
    icon: "https://www.twoleavestea.com/cdn/shop/files/transparent_sourcing.svg?v=1773116421&width=122",
    title: "Colorado Business",
  },
];

const OurOrigins = () => {
  return (
    <section
      className="relative lg:min-h-[150vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.twoleavestea.com/cdn/shop/files/adam-vradenburg-_gu7E90QChU-unsplash_1_1.webp?v=1771592855&width=2560')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-black/35"></div>

      <img
        className=" sm:block hidden  w-40 absolute -top-5 right-20 "
        src="https://www.twoleavestea.com/cdn/shop/files/From_farm_to_kettle_c340e18e-6549-4712-b2b1-b64a827e6338.svg?v=1773116502&width=300.0"
        alt=""
      />

      {/* Content */}
      <div className="relative  z-10 flex flex-col items-center justify-between py-15 h-full text-center px-6">
        {/* Badge */}
        <span className="bg-[#a2c9fc] -rotate-2 border border-black rounded px-3 py-2 text-xl font-bold uppercase tracking-wider">
          Our Origins
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-white text-5xl md:text-[120px] font-extrabold uppercase leading-none">
          Born In
          <br />
          Colorado
        </h2>

        {/* Description */}
        <p className=" max-w-7xl text-lg md:text-[50px] my-20 text-white font-serif  ">
          Our founder, Richard, started Two Leaves and a Bud in pursuit of a
          truly great cup. Two decades later, that same care and curiosity guide
          everything we make.
        </p>

        {/* Icons */}
        <div className="flex flex-wrap justify-center sm:gap-10 gap-5 my-20">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.icon}
                className=" sm:w-30 sm:h-30 w-20 h-20 rounded-full bg-lime-300 flex items-center justify-center text-3xl"
              />

              <p className="mt-3 text-white sm:text-xs text-[10px] uppercase font-bold text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#2F2C63] transition-all duration-300 hover:border border hover:text-[#2F2C63] border-[#2F2C63] hover:bg-white text-white px-14 py-3 cursor-pointer  rounded-full text-xl">
          Our Story
        </button>
      </div>
    </section>
  );
};

export default OurOrigins;

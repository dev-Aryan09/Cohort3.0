import React from "react";

const OurLattes = () => {
  return (
    <section className="relative bg-[#9f6429] min-h-125 flex items-center justify-center overflow-hidden">
      {/* Badge */}

      <img
        className=" w-40 absolute  top-5 sm:right-10 "
        src="https://www.twoleavestea.com/cdn/shop/files/designed_for_ease.svg?v=1773116538&width=180.0"
        alt=""
      />

      {/* Content */}
      <div className="text-center sm:mt-0 mt-20 px-6">
        {/* Label */}
        <div className="inline-block bg-[#FFD19B] border-2 border-black rounded-lg px-3 py-2 -rotate-2 shadow-md">
          <span className="text-4xl md:text-6xl font-black uppercase text-[#1d1d1d]">
            OUR LATTES
          </span>
        </div>

        {/* Heading */}
        <h1 className=" my-5 text-white uppercase font-black text-2xl md:text-4xl lg:text-5xl leading-none tracking-tight">
          BARISTA BLENDS FOR EVERY MOOD
        </h1>

        {/* Subtitle */}
        <p className=" text-white uppercase tracking-widest text-lg font-mono">
          (NO TRAINING REQUIRED)
        </p>
      </div>
    </section>
  );
};

export default OurLattes;

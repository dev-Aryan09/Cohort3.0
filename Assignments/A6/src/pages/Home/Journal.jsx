import React from "react";

const Journal = () => {
  return (
    <section className="bg-[#F8F5E8] pt-24 sm:pb-24 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <span className="inline-block bg-[#F57C2C] border-2 border-black rounded-md px-4 py-1 text-2xl font-extrabold uppercase -rotate-2">
          Journal
        </span>

        {/* Heading */}
        <h2 className="mt-6 font-serif text-[30px] sm:text-[40px]  md:text-[50px] leading-tight text-black/85 ">
          A community steeped in curiosity. Explore recipes, culture, and
          everyday teawisdom.
        </h2>
      </div>
    </section>
  );
};

export default Journal;

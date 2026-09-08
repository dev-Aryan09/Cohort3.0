import React from "react";
const bgImage =
  "https://www.twoleavestea.com/cdn/shop/files/Two_Leaves_Tea_Aug_25_Shoot-14x_SQ_1_d549e6bb-f1ad-4b36-a851-05e1af195a31.webp?v=1771593222&width=2700.0"; // Background Image

const AboutSection = () => {
  return (
    <>
      {/* Desktop */}
      <section
        className="relative w-full h-200 bg-cover bg-center bg-no-repeat md:block hidden  "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Left Card */}
        <div className="absolute left-10 top-10 bottom-10 max-w-112.5 bg-[#F96808] border border-black rounded-2xl p-10 flex flex-col justify-between">
          {/* Heading */}
          <div>
            <h2 className="font-serif text-white text-4xl leading-tight">
              Great Tea.
              <br />
              In Good
              <br />
              Company.
            </h2>
          </div>

          {/* Bottom Content */}
          <div>
            <p className="text-white text-2xl leading-relaxed mb-10">
              Discover the people, places, and purpose behind every blend.
            </p>

            <button className="bg-white border border-black rounded-full px-14 py-4 text-2xl hover:bg-black hover:text-white transition">
              About us
            </button>
          </div>
        </div>
      </section>

      {/* Mobile */}

      <div className=" md:hidden block  ">
        <div>
          <img src={bgImage} alt="" />
        </div>

        <div className="  bg-[#F96808] border  text-center  p-10 flex flex-col justify-between">
          {/* Heading */}
          <div>
            <h2 className="font-serif   text-white text-3xl leading-tight">
              Great Tea.
              <br />
              In Good Company.
            </h2>
          </div>

          <p className="text-white text-xl leading-relaxed my-5 ">
            Discover the people, places, and purpose behind every blend.
          </p>

          <button className="bg-white border cursor-pointer border-black rounded-full px-14 py-4 text-2xl hover:bg-black hover:text-white transition">
            About us
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

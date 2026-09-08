import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "1",
    title: "Meet Your Matcha",
    desc: "Whether your mornings are more grab-and-go or intentional and slow, we have matcha and matcha lattes for every ritual.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/cere-memorial_matcha_wide.png?v=1779304660&width=1575",
  },
  {
    id: "2",
    title: "A cup that firts the moment.",
    desc: "From compostable whole leaf tea sachets and iced tea to tea lattes and matcha, we’ve got something for everyone.",
    image:
      "https://www.twoleavestea.com/cdn/shop/files/AlpineBerry.webp?v=1774284236&width=1575.0",
  },
];

const Home = () => {
  return (
    <section className="relative h-175 bg-cover bg-center border-b">
      <button className="hero-prev md:flex hidden  absolute left-5 top-1/2 hover:bg-[#343066] hover:text-white -translate-y-1/3 z-20 bg-white w-14 h-14 rounded-full border  items-center justify-center cursor-pointer shadow">
        <ChevronLeft size={30} />
      </button>

      <button className="hero-next  md:flex hidden  absolute right-5 top-1/2 -translate-y-1/3 z-20 bg-white w-14 h-14 rounded-full border  items-center justify-center cursor-pointer shadow hover:bg-[#343066] hover:text-white">
        <ChevronRight size={30} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative h-175 bg-cover bg-center border-b"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className=" md:block  hidden  absolute left-10 top-1/2 -translate-y-1 max-w-125">
                <h1
                  className={` ${item.id == 2 && "text-white"}   font-serif text-7xl `}
                >
                  {item.title}
                </h1>

                <p
                  className={` ${item.id == 2 && "text-white"}     my-4 text-xl`}
                >
                  {item.desc}
                </p>

                <button className="bg-[#343066] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black border transition">
                  Shop Now
                </button>
              </div>

              <div className="  md:hidden     absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  max-w-125">
                <h1
                  className={` ${item.id == 2 && "text-white"} text-center   font-serif  sm:text-7xl text-3xl `}
                >
                  {item.title}
                </h1>

                <p
                  className={` ${item.id == 2 && "text-white"} text-center     my-4 sm:text-xl  `}
                >
                  {item.desc}
                </p>

                <button className="bg-[#343066] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black border transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Home;

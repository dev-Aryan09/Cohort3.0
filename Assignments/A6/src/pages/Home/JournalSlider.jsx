import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

const journals = [
  {
    id: 1,
    category: "RECIPE",
    title: "LONDON FOG EARL GREY LATTE",
    image:
      "https://www.twoleavestea.com/cdn/shop/articles/enjoy_9b280eb3-acdd-47d2-ba91-0d2f259d3d66.svg?v=1774545568&width=600",
    bg: "#BDD4F4",
  },
  {
    id: 2,
    category: "CAFFEINE",
    title: "NICE MATCHA DRINKS TO DELIGHT!",
    image:
      "//www.twoleavestea.com/cdn/shop/articles/Two_Leaves_May_25_Shoot-36_16x9_6008ffcb-7380-43d9-b1f6-b1f542f934b0.jpg?v=1773683613&width=600",
    bg: "#E8F8C9",
  },
  {
    id: 3,
    category: "MATCHA",
    title: '"NICE" ICED MATCHA LATTE',
    image:
      "//www.twoleavestea.com/cdn/shop/articles/Two_Leaves_May_25_Shoot-24_SQ.jpg?v=1780326557&width=600",
    bg: "#7FC242",
  },
  {
    id: 4,
    category: "MATCHA",
    title: "MATCHA ENERGY BALLS",
    image:
      "//www.twoleavestea.com/cdn/shop/articles/chef_s_matcha_mix_9ae88222-5d88-415f-a90d-4cd0e47af7d8.svg?v=1775654273&width=600",
    bg: "#E6F7AF",
  },
  {
    id: 5,
    category: "TEA 101",
    title: "5 REASONS TO DRINK TEAS",
    image:
      "//www.twoleavestea.com/cdn/shop/articles/ceremonial-matcha-tea-organic_5cd06e48-0fae-43a5-aee4-7d523da377a7.svg?v=1780325404&width=600",
    bg: "#F6F2E7",
  },
  {
    id: 6,
    category: "matcha",
    title: "Grinch Latte",
    image:
      "https://www.twoleavestea.com/cdn/shop/articles/easy_to_prepare_cold_d444ce3d-bb29-4de5-83ae-4aef3582392b.svg?v=1775655934&width=750.0",
    bg: "#2a2857",
  },
  {
    id: 7,
    category: "chai",
    title: "Grinch Latte",
    image:
      "https://www.twoleavestea.com/cdn/shop/articles/easy_to_prepare_cold_d2bb63c1-ef3c-4bd5-ac42-ecce65535274.svg?v=1775654474&width=750.0",
    bg: "#2a2857",
  },
];

const JournalSlider = () => {
  return (
    <section className="bg-[#f8f5ea] py-20">
      <div className=" px-5  relative">
        <button className="journal-prev absolute left-0 top-1/3 -translate-y-1/3 z-20 bg-white w-14 h-14 rounded-full border flex items-center justify-center cursor-pointer shadow">
          <ChevronLeft size={30} />
        </button>

        <button className="journal-next absolute right-0 top-1/3 -translate-y-1/3 z-20 bg-white w-14 h-14 rounded-full border flex items-center justify-center cursor-pointer shadow">
          <ChevronRight size={30} />
        </button>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          navigation={{
            nextEl: ".journal-next",
            prevEl: ".journal-prev",
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={25}
          slidesPerView={4}
          speed={1500}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {journals.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-3xl  overflow-hidden border border-black hover:-translate-y-2 duration-300 cursor-pointer">
                <div
                  className="relative h-85 flex justify-center items-center"
                  style={{ background: item.bg }}
                >
                  <span className="absolute left-4 top-4 bg-white border rounded-md px-3 py-1 font-bold">
                    {item.category}
                  </span>

                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-[#BCD0F1] min-h-22.5 flex items-center px-5">
                  <h3 className="uppercase text-xl font-mono leading-8">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-16 block mx-auto bg-[#2a2857] text-white px-12 py-5 rounded-full text-xl hover:bg-transparent cursor-pointer border border-[#2a2857] hover:text-[#2a2857] duration-300">
          Explore The Tea Journal
        </button>
      </div>
    </section>
  );
};

export default JournalSlider;

import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden rounded-4xl border border-white bg-[#111111]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative grid gap-10 px-8 py-8 lg:grid-cols-[2fr_1fr] lg:px-14">
        {/* Left */}
        <div>
          <p className="py-3 uppercase tracking-[1px] text-lime-400 text-sm">
            Good Afternoon 👋
          </p>

          <h1 className="text-5xl font-semibold leading-12 text-white ">
            Welcome back,
            <br />
            <span className="text-lime-400">Aryan!</span>
          </h1>

          <p className="mt-6 max-w-md text-md leading-6 font-semibold text-neutral-500">
            Discover today's picks — hand-crafted products across electronics,
            fashion, furniture and more.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => {
                navigate("/main/shop");
              }}
              className="flex items-center gap-3 rounded-2xl bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300 cursor-pointer"
            >
              Shop Now
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => {
                navigate("/main/shop");
              }}
              className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm text-neutral-400 transition hover:border-neutral-500 cursor-pointer"
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:items-end justify-center gap-4">
          <div className="rounded-2xl border border-lime-700 bg-lime-950/40 p-4 text-center w-36">
            <h2 className="text-3xl font-semibold text-lime-400">20+</h2>

            <p className="mt-2 text-neutral-500 text-xs">Products Available</p>
          </div>

          <div className="rounded-2xl border border-neutral-600 p-4 text-center w-36">
            <h2 className="text-3xl font-semibold text-white">Free</h2>

            <p className="mt-2 text-neutral-500 text-xs">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

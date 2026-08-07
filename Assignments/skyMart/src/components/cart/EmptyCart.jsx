import { ArrowRight, Package } from "lucide-react";
import { useNavigate } from "react-router";

const EmptyCart = ({ setCartOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="rounded-2xl border border-neutral-700 bg-[#1b1b1b] p-4">
        <Package size={40} className="text-neutral-500" />
      </div>

      <h2 className="mt-10 text-3xl font-bold text-white">Cart is empty</h2>

      <p className="mt-1 text-sm text-neutral-500">Go shop something cool!</p>

      <button
        onClick={() => {
          navigate("/main/shop");
          setCartOpen(false);
        }}
        className="flex items-center gap-2 mt-10 rounded-2xl bg-lime-400 px-5 py-2.5 font-semibold text-black transition hover:bg-lime-300 cursor-pointer"
      >
        Browse Products
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default EmptyCart;

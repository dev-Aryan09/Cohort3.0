import { ShoppingBag, X } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const CartHeader = ({ count, setCartOpen }) => {
  const { totalCartQuantity } = useContext(MyStore);
  return (
    <div className="flex items-center justify-between border-b border-white p-4.5">
      <div className="flex items-center gap-3">
        <ShoppingBag size={20} className="text-lime-400" />

        <h2 className="text-xl font-semibold text-white">Cart</h2>

        {true > 0 && (
          <span className="rounded-full bg-lime-900 px-2.5 py-0.5 text-xs text-lime-400">
            {totalCartQuantity} Items
          </span>
        )}
      </div>

      <button title="close cart" onClick={() => setCartOpen(false)}>
        <X size={16} className="text-neutral-400 cursor-pointer" />
      </button>
    </div>
  );
};

export default CartHeader;

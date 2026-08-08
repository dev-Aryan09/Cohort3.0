import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const {
    cartItems,
    setCartItems,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = useContext(MyStore);

  const handleDeleteCartItem = (id) => {
    const nonDeletedItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    toast.success("Item Deleted!", {
      position: "top-right",
      autoClose: 1500,
      pauseOnHover: false,
      theme: "dark",
    });
    localStorage.setItem("cartItems", JSON.stringify(nonDeletedItems));
    setCartItems(nonDeletedItems);
  };

  return (
    <div className="mb-5 rounded-3xl border border-white bg-[#151515] p-2.5 transition hover:border-lime-400">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-white p-2">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between">
          {/* Title */}
          <div>
            <h3 className="line-clamp-1 text-sm font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-md font-bold text-lime-400">
              ${item.price}
            </p>

            <p className="text-xs text-neutral-500">${item.price} each</p>
          </div>

          {/* Bottom */}
          <div className="mt-2 flex items-center justify-between">
            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantityDecrement(item.id)}
                className="flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-700 text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                <Minus size={13} />
              </button>

              <span className="min-w-6 text-center text-lg font-semibold text-white">
                {item.quantity}
              </span>

              <button
                onClick={() => handleQuantityIncrement(item.id)}
                className="flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-700 text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                <Plus size={13} />
              </button>
            </div>

            {/* Delete */}
            <button
              title="remove item"
              onClick={() => handleDeleteCartItem(item.id)}
              className="text-red-400 transition hover:text-red-400 cursor-pointer"
            >
              <Trash2 size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

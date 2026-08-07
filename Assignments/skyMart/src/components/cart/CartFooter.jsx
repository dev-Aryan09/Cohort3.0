import React, { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const CartFooter = () => {
  const { cartItems } = useContext(MyStore);
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc = acc + item.price * 100);
  }, 0);

  return (
    <div className="border-t border-white py-3 px-4">
      <div className="mb-3 flex justify-between">
        <span className="text-neutral-500">Total</span>

        <span className="text-2xl font-semibold text-white">{`$${totalPrice / 100}`}</span>
      </div>

      <button className="w-full rounded-2xl bg-lime-400 py-2 text-xl font-semibold text-black cursor-pointer">
        Checkout →
      </button>

      <button
        title="delete all products"
        className="mt-3 w-full text-neutral-500 text-xs hover:text-red-500 cursor-pointer"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartFooter;

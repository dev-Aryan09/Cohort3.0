import React, { useContext } from "react";
import { MyShop } from "../context/MyShopContext";

const Cart = () => {
  // consuming data via context Api
  const { cartItems } = useContext(MyShop);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Shopping Cart ({`${cartItems.length} - items`})
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Your Cart is Empty 🛒
            </h2>
            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow p-4 flex gap-5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-green-600 font-bold text-xl">
                        ${item.price}
                      </span>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="flex justify-between mb-3">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

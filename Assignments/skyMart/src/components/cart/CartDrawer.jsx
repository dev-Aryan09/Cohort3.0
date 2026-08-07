import { X } from "lucide-react";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";

const CartDrawer = ({ cartOpen, setCartOpen }) => {
  const { cartItems } = useContext(MyStore);
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300
                ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md flex flex-col bg-[#111111]
                border-l border-neutral-700
                 transition-transform duration-500 ease-in-out

                ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <CartHeader count={cartItems.length} setCartOpen={setCartOpen} />

        <div className="flex-1 flex-col overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <EmptyCart setCartOpen={setCartOpen} />
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {cartItems?.length > 0 && <CartFooter />}
      </aside>
    </>
  );
};

export default CartDrawer;

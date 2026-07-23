import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          return item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Math.max() prevents going below 0
            : item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <MyStore.Provider
      value={{
        toggle,
        setToggle,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

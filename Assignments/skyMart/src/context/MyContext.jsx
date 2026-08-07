import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const [cartOpen, setCartOpen] = useState(false);

  const [productsData, setProductsData] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUsers")) || [];
  });
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || null;
  });

  const [isLoading, setIsLoading] = useState(true);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error fetching products...", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    let items = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(items);

    localStorage.setItem("cartItems", JSON.stringify(items));

    setCartOpen(true);

    toast.success("Added to cart 🛒", {
      position: "bottom-right",
      autoClose: 1000,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  const totalCartPrice = cartItems.reduce((acc, item) => {
    return (acc = acc + item.price * 100);
  }, 0);

  const totalCartQuantity = cartItems.reduce((total, item) => {
    return (total = total + item.quantity);
  }, 0);

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        getProductsData,
        isLoading,
        cartItems,
        setCartItems,
        cartOpen,
        setCartOpen,
        totalCartPrice,
        totalCartQuantity,
        handleAddToCart,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

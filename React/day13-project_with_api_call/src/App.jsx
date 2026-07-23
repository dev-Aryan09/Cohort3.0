import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  let { toggle, cartItems } = useContext(MyStore);

  // calling API using axios
  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error calling api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="min-h-screen p-2 flex flex-col gap-4 bg-slate-200">
      <Navbar />

      {toggle ? (
        <div className="grid grid-cols-5 gap-4">
          {productsData.map((product) => {
            // isInCart will contain single object
            const isInCart = cartItems.find((item) => {
              return item.id === product.id;
            });
            return (
              <ProductCard
                key={product.id}
                product={product}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-screen">
          <CartScreen />
        </div>
      )}
    </div>
  );
};

export default App;

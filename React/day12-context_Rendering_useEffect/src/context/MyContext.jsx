import { useState } from "react";
import { createContext } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  console.log("Context provider rendering...", performance.now());
  const [count, setCount] = useState(0);
  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};

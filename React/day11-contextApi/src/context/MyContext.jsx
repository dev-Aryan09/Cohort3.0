import { createContext, useState } from "react";

// create a store which is empty
export const MyStore = createContext();

// make a provider of our store(context) who handles data
// and serves to the customers (children components)

export const ContextProvider = ({ children }) => {
  const [centralData, setCentralData] = useState("I am from context");
  return <MyStore.Provider value={centralData}>{children}</MyStore.Provider>;
};

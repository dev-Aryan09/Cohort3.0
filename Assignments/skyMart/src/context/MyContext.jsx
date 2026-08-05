import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(null);

  console.log("registerd users -> ", registeredUsers);
  console.log("logged in user -> ", loggedInUser);
  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

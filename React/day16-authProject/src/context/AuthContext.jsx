import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUsers")) || [];
  });
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || null;
  });

  console.log(registeredUsers, performance.now());
  console.log(loggedInUser, performance.now());
  return (
    <AuthStore.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};

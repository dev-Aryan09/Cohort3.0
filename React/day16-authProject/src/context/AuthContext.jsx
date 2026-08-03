import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {
  console.log("context rendering...", performance.now());
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUsers")) || [];
  });
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || null;
  });

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

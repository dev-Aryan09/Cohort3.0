import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { loggedInUser } = useContext(MyStore);

  useEffect(() => {
    if (!loggedInUser) {
      toast.error("User not found, please login again", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  }, []);

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;

import React, { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(AuthStore);
  console.log("In protected route", loggedInUser, performance.now());

  if (!loggedInUser) {
    alert("User not loggedd in or Invalid credentials");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

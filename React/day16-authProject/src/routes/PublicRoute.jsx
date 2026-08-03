import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../context/AuthContext";

const PublicRoute = () => {
  console.log("public route rendering...", performance.now());
  const { loggedInUser } = useContext(AuthStore);

  if (loggedInUser) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default PublicRoute;

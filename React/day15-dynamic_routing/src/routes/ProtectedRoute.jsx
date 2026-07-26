import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let isAdmin = true;
  if (!isAdmin) {
    alert("you are not a Admin");
    return <Navigate to={"/"} replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;

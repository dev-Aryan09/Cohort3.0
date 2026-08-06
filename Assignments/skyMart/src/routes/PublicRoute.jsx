import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { loggedInUser } = useContext(MyStore);

  if (loggedInUser) {
    return <Navigate to="/main" />;
  }

  return children;
};

export default PublicRoute;

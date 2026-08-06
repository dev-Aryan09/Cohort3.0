import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthProtectedRoute from "./AuthProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/*this nested route handles our main layout with header and footer  */}
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* this nested route will handle our layout without header and footer */}
      <Route
        path="/"
        element={
          <AuthProtectedRoute>
            <AuthLayout />
          </AuthProtectedRoute>
        }
      >
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

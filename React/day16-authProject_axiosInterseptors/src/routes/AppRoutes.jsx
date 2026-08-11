import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "users",
              element: <UsersPage />,
            },
            {
              path: "products",
              element: <ProductsPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

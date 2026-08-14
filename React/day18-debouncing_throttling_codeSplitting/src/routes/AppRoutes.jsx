import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
// import About from "../pages/About";
const About = lazy(() => import("../pages/About")); // chunk splitted
// import Contact from "../pages/Contact";
const Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<h1>Loading Details...</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1>Loading contact info...</h1>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

// Note - <Suspense> is required when using lazy(). If a lazy component's chunk hasn't loaded yet and there's no Suspense boundary above it in the tree, React throws an error instead of rendering anything gracefully.

// lazy() takes a function that returns a dynamic import(), and returns a special lazy component that you can render like any normal component (<About />). But under the hood, it behaves very differently from a normal component

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import LadiesPage from "../pages/LadiesPage";
import MenPage from "../pages/MenPage";
import KidsPage from "../pages/KidsPage";
import HomePage from "../pages/HomePage";
import BeautyPage from "../pages/BeautyPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "ladies",
          element: <LadiesPage />,
        },
        {
          path: "men",
          element: <MenPage />,
        },
        {
          path: "kids",
          element: <KidsPage />,
        },
       
        {
          path: "beauty",
          element: <BeautyPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
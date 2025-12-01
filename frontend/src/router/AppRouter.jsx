// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import HomeLayout from "../layouts/HomeLayout";
// import LadiesPage from "../pages/LadiesPage";
// import MenPage from "../pages/MenPage";
// import KidsPage from "../pages/KidsPage";
// import HomePage from "../pages/HomePage";
// import BeautyPage from "../pages/BeautyPage";

// const AppRouter = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <HomeLayout />,
//       children: [
//         {
//           path: "home",
//           element: <HomePage />,
//         },
//         {
//           path: "ladies",
//           element: <LadiesPage />,
//         },
//         {
//           path: "men",
//           element: <MenPage />,
//         },
//         {
//           path: "kids",
//           element: <KidsPage />,
//         },
       
//         {
//           path: "beauty",
//           element: <BeautyPage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default AppRouter;

// src/router/AppRouter.jsx
// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRouter;

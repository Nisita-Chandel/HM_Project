// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import CartPage from "../pages/CartPage.jsx";
import LadiesPage from "../pages/LadiesPage.jsx";
import MenPage from "../pages/MenPage.jsx";
import LadiesDetailPage from "../pages/LadiesDetailPage.jsx";
import KidsPage from "../pages/KidsPage.jsx";
import BeautyPage from "../pages/BeautyPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/ladies" element={<LadiesPage />} />
      <Route path="/ladies/:id" element={<LadiesDetailPage />} /> 
      <Route path="/men" element={<MenPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/beauty" element={<BeautyPage />} />

    </Routes>
  );
};

export default AppRouter;

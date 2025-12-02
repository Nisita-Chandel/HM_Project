
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage.jsx";

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

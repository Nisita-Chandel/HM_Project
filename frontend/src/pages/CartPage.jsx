// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log("Proceed to checkout clicked");

    navigate("/checkout");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <p className="mb-6">Total items: {totalItems}</p>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                <p className="font-semibold">₹{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="border border-red-400 text-red-500 px-4 py-1 rounded-full text-sm hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => dispatch(clearCart())}
            className="text-red-500 text-sm hover:underline"
          >
            Clear cart
          </button>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-gray-500">Total amount</p>
              <p className="text-xl font-semibold">₹{totalAmount}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-black"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

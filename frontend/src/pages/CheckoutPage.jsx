import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../store/cartSlice";
import useRazorpayPayment from "../payment/useRazorpayPayment";

const CheckoutPage = () => {
  const { items, totalAmount } = useSelector(selectCart);
  const dispatch = useDispatch();
  const { openRazorpayCheckout } = useRazorpayPayment();

  const handlePayment = async () => {
    try {
      const success = await openRazorpayCheckout(totalAmount, items);
      if (success) {
        dispatch(clearCart());
        alert("Payment successful!");
      }
    } catch (err) {
      alert("Payment failed or cancelled");
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">
                Qty: {item.qty} × ₹{item.price}
              </p>
            </div>
            <p className="font-semibold">₹{item.qty * item.price}</p>
          </div>
        ))}

        <div className="flex items-center justify-between pt-4 border-t mt-2">
          <p className="font-semibold text-lg">Total</p>
          <p className="font-semibold text-2xl">₹{totalAmount}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handlePayment}
          className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg hover:bg-black"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadRazorpayScript } from "../utils/loadRazorpay";

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // If cart is empty
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white text-black border border-gray-300 rounded-2xl p-6 shadow-xl">
          <h1 className="text-2xl font-semibold mb-3">Checkout</h1>
          <p className="text-gray-700 mb-4">
            Your cart is empty. Add something you love and come back 💖
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Go back to shopping
          </button>
        </div>
      </div>
    );
  }

  const shippingCharge = totalAmount >= 1999 ? 0 : 99;
  const grandTotal = totalAmount + shippingCharge;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load Razorpay SDK. Check your internet.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/create-order", {
        amount: grandTotal,
      });

      const { orderId, amount, currency } = res.data;

      const options = {
        key: RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "HM Demo Store",
        description: "Order payment",
        order_id: orderId,
        prefill: {
          name: "Demo User",
          email: "demo@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#000000",
        },
        handler: function () {
          alert("Payment successful! (demo)");
          navigate("/");
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error starting payment:", error);
      alert("Unable to start payment.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 text-black">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-1">
              Secure checkout
            </p>
            <h1 className="text-2xl lg:text-3xl font-semibold">Complete your order</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-green-600">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200 border border-green-400">
              🔒
            </span>
            <span>256-bit SSL encrypted payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr,1.1fr] gap-6 lg:gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Stepper */}
            <div className="flex items-center gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-semibold">
                  1
                </span>
                <span className="font-medium">Shipping</span>
              </div>
              <span className="h-px flex-1 bg-gray-400" />
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-[11px] text-gray-600">
                  2
                </span>
                <span className="text-gray-500">Payment</span>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">

              {/* Contact Info */}
              <section className="bg-white border border-gray-300 rounded-2xl p-5 shadow">
                <h2 className="text-sm font-semibold mb-4">Contact information</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <InputGroup label="Full name" placeholder="Your name" />
                  <InputGroup label="Phone number" placeholder="+91 98765 43210" />
                  <div className="sm:col-span-2">
                    <InputGroup label="Email address" type="email" placeholder="you@example.com" />
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section className="bg-white border border-gray-300 rounded-2xl p-5 shadow">
                <h2 className="text-sm font-semibold mb-4">Shipping address</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="sm:col-span-2">
                    <InputGroup label="Address line" placeholder="House no, street, area" />
                  </div>
                  <InputGroup label="City" placeholder="City" />
                  <InputGroup label="State" placeholder="State" />
                  <InputGroup label="PIN code" placeholder="110001" />
                  <InputGroup label="Country" defaultValue="India" />
                </div>
              </section>

              {/* Payment */}
              <section className="bg-white border border-gray-300 rounded-2xl p-5 shadow">
                <h2 className="text-sm font-semibold mb-4">Payment method</h2>
                <div className="space-y-3 text-sm">
                  
                  {PaymentOption("cod", "Cash on delivery (COD)", "Pay at your doorstep", paymentMethod, setPaymentMethod)}
                  {PaymentOption("upi", "UPI (Google Pay / PhonePe / Paytm)", "Fast & secure", paymentMethod, setPaymentMethod)}
                  {PaymentOption("card", "Credit / Debit card", "VISA / MasterCard / RuPay", paymentMethod, setPaymentMethod)}

                  <p className="text-xs text-gray-600 mt-2">
                    * Razorpay test mode is active. Add live keys in <code>.env</code>.
                  </p>
                </div>
              </section>

              {/* Place Order */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <p className="text-[11px] text-gray-700 flex items-center gap-1">
                  <span className="text-green-600">✔</span> By placing the order, you agree to our terms & return policy.
                </p>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 shadow-lg transition"
                >
                  Place order ({totalItems} items)
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SUMMARY */}
          <aside className="bg-white border border-gray-300 rounded-2xl p-5 shadow h-fit lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold mb-4 flex items-center justify-between">
              Order summary
              <span className="text-[11px] text-gray-600">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            </h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium line-clamp-2">{item.title}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">Qty: {item.qty}</p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="font-semibold">₹{item.price * item.qty}</p>
                    <p className="text-[11px] text-gray-600">₹{item.price} each</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shippingCharge === 0 ? "Free" : `₹${shippingCharge}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-base mt-2">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-2">Prices include all taxes.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

/* Reusable Input Component */
const InputGroup = ({ label, ...props }) => (
  <div>
    <label className="block text-xs text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 bg-white text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500"
    />
  </div>
);

/* Payment Option Component */
const PaymentOption = (value, title, subtitle, paymentMethod, setPM) => (
  <label
    className={`flex items-center justify-between gap-3 cursor-pointer rounded-xl border px-3 py-2 transition ${
      paymentMethod === value
        ? "border-black bg-gray-200"
        : "border-gray-300 bg-white hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="payment"
        value={value}
        checked={paymentMethod === value}
        onChange={(e) => setPM(e.target.value)}
        className="w-4 h-4"
      />
      <span className="text-black">{title}</span>
    </div>
    <span className="text-[11px] text-gray-600">{subtitle}</span>
  </label>
);

export default CheckoutPage;

// src/payment/useRazorpayPayment.js
import { useEffect, useState } from "react";

const useRazorpayPayment = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setLoaded(true);
    script.onerror = () => console.error("Razorpay SDK failed to load");
    document.body.appendChild(script);
  }, []);

  const openRazorpayCheckout = (amount, cartItems) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!loaded) return reject("Razorpay SDK not loaded");

        // 1) call backend to create order
        const res = await fetch("http://localhost:5000/api/payment/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount * 100 }), // paise
        });

        const order = await res.json();

        const options = {
          key: "YOUR_RAZORPAY_KEY_ID", // replace with real key
          amount: order.amount,
          currency: order.currency,
          name: "HM Demo Store",
          description: "Order payment",
          order_id: order.id,
          handler: function (response) {
            console.log("Payment success:", response);
            resolve(true);
          },
          prefill: {
            name: "Test User",
            email: "test@example.com",
            contact: "9999999999",
          },
          notes: {
            cart: JSON.stringify(cartItems),
          },
          theme: {
            color: "#111827",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        rzp.on("payment.failed", function (response) {
          console.error("Payment failed:", response);
          reject(response);
        });
      } catch (err) {
        reject(err);
      }
    });
  };

  return { openRazorpayCheckout };
};

export default useRazorpayPayment;

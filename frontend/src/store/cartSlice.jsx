// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    // Example item structure:
    // { id: "1", title: "Floral Layered Dress", price: 1299, qty: 1, img: "..." }
  ],
  totalItems: 0,
  totalAmount: 0,
};

const calcTotals = (state) => {
  state.totalItems = state.items.reduce((sum, item) => sum + item.qty, 0);
  state.totalAmount = state.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
      calcTotals(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      calcTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      calcTotals(state);
    },
    setCartFromApi: (state, action) => {
      // optional, if you ever load cart from API
      state.items = action.payload;
      calcTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartFromApi } =
  cartSlice.actions;

export default cartSlice.reducer;

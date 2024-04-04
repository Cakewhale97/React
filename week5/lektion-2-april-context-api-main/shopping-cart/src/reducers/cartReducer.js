import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;

      } else {
        state.push(action.payload);
      }
    },
    increaseQuantity(state, action) {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
      }
    },
    decreaseQuantity(state, action) {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
        } else {
          return state.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;

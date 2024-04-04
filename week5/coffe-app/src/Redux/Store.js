import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.jsx";

export default configureStore({
  reducer: {
    cart: CartSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      console.log("state är", state);
      console.log("action är", action);
      return state + 1;
    },
    decrement(state, action) {
      console.log("state är", state, "action är", action);
      return state - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterReducer";
import authSlice from "./reducer/authSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSlice
    }
});

export default store;

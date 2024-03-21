import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //attempt to get user from local storage and parse it back into a javascript object to be used as part of the inital state of the redux slice.
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    }
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;


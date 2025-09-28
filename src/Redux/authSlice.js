import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoginOpen: false,
        isLogoutOpen: false,
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        openLogin: (state) => {
            state.isLoginOpen = true;
        },
        closeLogin: (state) => {
            state.isLoginOpen = false;
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload; //payload = user data
            state.isLoginOpen = false;
        },
        openLogout: (state) => {
            state.isLogoutOpen = true;
        },
        closeLogout: (state) => {
            state.isLogoutOpen = false;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
})

export const {openLogin, closeLogin, loginSuccess, openLogout, closeLogout, logOut} = authSlice.actions;
export default authSlice.reducer;
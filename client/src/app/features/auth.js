import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    formstackAccessToken: "",
  },
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;

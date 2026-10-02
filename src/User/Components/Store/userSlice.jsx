import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
  state.user = action.payload?.user ?? null;
  state.token = action.payload?.token ?? null;
  state.isAuthenticated = !!action.payload?.user;
},
logout: (state) => {
  state.user = null;
  state.token = null;
  state.isAuthenticated = false;
},
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
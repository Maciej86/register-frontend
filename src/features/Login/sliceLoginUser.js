import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
    loading: false,
  },
  reducers: {
    fetchLoginUser: (state) => {
      state.loading = true;
    },
    fetchLoginUserToken: (state) => {
      state.loading = true;
    },
    setLoginUser: (state, { payload: user }) => {
      state.user = user;
      if(user.length === 0) {
        state.loading = false;
      } else {
        state.loading = true;
      }
      console.log(state.loading);
    },
  },
});

export const selectLoginUser = (state) => state.loginUserStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectUserState = (state) =>
  selectLoginUser(state).user;

export const { fetchLoginUser, fetchLoginUserToken, setLoginUser } =
  loginUserSlice.actions;

export default loginUserSlice.reducer;

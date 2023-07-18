import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
    loading: "",
  },
  reducers: {
    fetchLoginUser: (state) => {
      state.loading = "loading";
    },
    fetchLoginUserToken: (state) => {
      state.loading = "loading";
    },
    setLoginUser: (state, { payload: user }) => {
      state.user = user;
      state.loading = "success";
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

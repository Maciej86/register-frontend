import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
    userNotExist: false,
    loading: false,
    loadingTokenUser: false,
  },
  reducers: {
    fetchLoginUser: (state) => {
      state.loading = true;
    },
    fetchLoginUserToken: (state) => {
      state.loadingTokenUser = true;
    },
    setLoginUser: (state, { payload: user }) => {
      state.user = user;
      if (user.length === 0) {
        state.loading = false;
        state.userNotExist = true;
      } else {
        state.loading = true;
        state.userNotExist = false;
      }
      state.loadingTokenUser = false;
    },
  },
});

export const selectLoginUser = (state) => state.loginUserStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectUserState = (state) => selectLoginUser(state).user[0];
export const selectStatusUser = (state) => selectLoginUser(state).loading;
export const selectStatusTokenUser = (state) =>
  selectLoginUser(state).loadingTokenUser;
export const selectUserNotExist = (state) =>
  selectLoginUser(state).userNotExist;

export const { fetchLoginUser, fetchLoginUserToken, setLoginUser } =
  loginUserSlice.actions;

export default loginUserSlice.reducer;

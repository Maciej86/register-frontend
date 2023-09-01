import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
    userOut: false,
    userNotExist: false,
    loading: false,
    loadingTokenUser: false,
    loadingOut: false,
    loadingEditPassword: false,
  },
  reducers: {
    fetchLoginUser: (state) => {
      state.loading = true;
      state.userOut = false;
      state.userNotExist = false;
    },
    fetchLoginUserToken: (state) => {
      state.loadingTokenUser = true;
      state.userOut = false;
    },
    setLoginUser: (state, { payload: user }) => {
      state.user = user;
      if (user.length === 0) {
        state.userNotExist = true;
      } else {
        state.loading = true;
        state.userNotExist = false;
      }
      state.loading = false;
      state.loadingTokenUser = false;
    },
    fetchLoginUserOut: (state) => {
      state.loadingOut = true;
    },
    setLoginOutUser: (state) => {
      state.user = [];
      state.userOut = true;
      state.loadingOut = false;
    },
    fetchEditUser: (state) => {
      state.loading = true;
    },
    setEditUser: (state, { payload: user }) => {
      state.loading = false;
      state.user = user;
    },
    fetchEditPassword: (state) => {
      state.loadingEditPassword = true;
    },
    setEditPassword: (state, { payload: changedPassword }) => {
      state.loadingEditPassword = false;
      console.log(changedPassword);
    },
  },
});

export const selectLoginUser = (state) => state.loginUserStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectUserState = (state) => selectLoginUser(state).user[0];
export const selectStatusUserOut = (state) => selectLoginUser(state).userOut;
export const selectStatusUser = (state) => selectLoginUser(state).loading;
export const selectloadingOut = (state) => selectLoginUser(state).loadingOut;
export const selectloadingEditPassword = (state) =>
  selectLoginUser(state).loadingEditPassword;
export const selectStatusTokenUser = (state) =>
  selectLoginUser(state).loadingTokenUser;
export const selectUserNotExist = (state) =>
  selectLoginUser(state).userNotExist;

export const {
  fetchLoginUser,
  fetchLoginUserToken,
  fetchLoginUserOut,
  setLoginUser,
  setLoginOutUser,
  fetchEditUser,
  setEditUser,
  fetchEditPassword,
  setEditPassword,
} = loginUserSlice.actions;

export default loginUserSlice.reducer;
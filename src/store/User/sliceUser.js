import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: [],
  userOut: false,
  userNotExist: false,
  editAccount: false,
  changingPassword: "",
  loading: false,
  loadingTokenUser: false,
  loadingOut: false,
  loadingEditPassword: false,
  emailExsist: "",
  serverError: false,
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: initialUser,
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
      state.serverError = false;
      state.editAccount = false;
      state.emailExsist = "";
      state.loading = true;
    },
    setEditUser: (state, { payload: user }) => {
      state.loading = false;
      state.user = user;
      state.editAccount = true;
    },
    fetchEditPassword: (state) => {
      state.serverError = false;
      state.changingPassword = false;
      state.loadingEditPassword = true;
    },
    setEditPassword: (state, { payload: changedPassword }) => {
      state.loadingEditPassword = false;
      state.changingPassword = changedPassword;
    },
    fetchEditEmail: (state) => {
      state.serverError = false;
      state.loading = true;
    },
    setEditEmail: (state, { payload: emailExsist }) => {
      state.emailExsist = emailExsist;
      if (emailExsist) {
        state.loading = false;
      }
    },
    serverConnectionError: (state) => {
      state.serverError = !state.serverError;
      state.loading = false;
      state.loadingEditPassword = false;
      state.loadingEditPassword = false;
    },
    resetUser: (state) => {
      state.changingPassword = "";
      state.editAccount = false;
      state.emailExsist = "";
      state.serverError = false;
    },
  },
});

export const selectLoginUser = (state) => state.loginUserStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectUserState = (state) => selectLoginUser(state).user[0];
export const selectEditAccount = (state) => selectLoginUser(state).editAccount;
export const selectEditPassword = (state) =>
  selectLoginUser(state).changingPassword;
export const selectStatusUserOut = (state) => selectLoginUser(state).userOut;
export const selectStatusUser = (state) => selectLoginUser(state).loading;
export const selectStatusloadingOut = (state) =>
  selectLoginUser(state).loadingOut;
export const selectStatusEditPassword = (state) =>
  selectLoginUser(state).loadingEditPassword;
export const selectStatusTokenUser = (state) =>
  selectLoginUser(state).loadingTokenUser;
export const selectUserNotExist = (state) =>
  selectLoginUser(state).userNotExist;
export const selectEmailExsist = (state) => selectLoginUser(state).emailExsist;
export const selectErrorServer = (state) => selectLoginUser(state).serverError;

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
  fetchEditEmail,
  setEditEmail,
  serverConnectionError,
  resetUser,
} = loginUserSlice.actions;

export default loginUserSlice.reducer;
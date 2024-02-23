import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: [],
  userOut: false,
  userNotExist: false,
  loading: false,
  loadingTokenUser: false,
  loadingOut: false,
  loadingEditAccount: false,
  loadingEditPassword: false,
  loadingAddOrDeleteUser: false,
  editAccount: false,
  addUser: false,
  deleteUser: false,
  passwordExsist: false,
  emailExsist: false,
  endChceckEmailExsist: false,
  serverError: false,
};

const userSlice = createSlice({
  name: "user",
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
    fetchEditAccount: (state) => {
      state.serverError = false;
      state.editAccount = false;
      state.emailExsist = false;
      state.loadingEditAccount = true;
    },
    setEditAccount: (state, { payload: user }) => {
      state.loadingEditAccount = false;
      state.user = user;
      state.editAccount = true;
    },
    setEditUser: (state) => {
      state.loadingEditAccount = false;
      state.editAccount = true;
    },
    fetchEditPassword: (state) => {
      state.serverError = false;
      state.passwordExsist = false;
      state.loadingEditPassword = true;
    },
    setEditPassword: (state, { payload: changedPassword }) => {
      console.log(changedPassword);
      state.loadingEditPassword = false;
      state.passwordExsist = changedPassword;
    },
    fetchEmailExsist: (state) => {
      state.serverError = false;
      state.loadingEditAccount = true;
      state.loadingAddOrDeleteUser = true;
      state.endChceckEmailExsist = false;
    },
    setEmailExsist: (state, { payload: emailExsist }) => {
      state.emailExsist = emailExsist;
      state.loadingEditAccount = false;
      state.loadingAddOrDeleteUser = false;
      state.endChceckEmailExsist = true;
    },
    fetchPasswordExsist: (state) => {
      state.serverError = false;
      state.loadingEditPassword = true;
    },
    setPasswordExsist: (state, { payload: passwordExsist }) => {
      state.passwordExsist = passwordExsist;
      state.loadingEditPassword = false;
    },
    fetchAddUser: (state) => {
      state.loadingAddOrDeleteUser = true;
    },
    setAddUser: (state, { payload: newUser }) => {
      state.loadingAddOrDeleteUser = false;
      state.addUser = newUser;
    },
    fetchDeleteUser: (state) => {
      state.loadingAddOrDeleteUser = true;
    },
    setDeleteUser: (state, { payload: deleteUser }) => {
      state.loadingAddOrDeleteUser = false;
      state.deleteUser = deleteUser;
    },
    serverConnectionError: (state) => {
      state.serverError = true;
      state.loading = false;
      state.loadingAddOrDeleteUser = false;
      state.loadingEditPassword = false;
    },
    resetUserState: (state) => {
      state.passwordExsist = false;
      state.editAccount = false;
      state.emailExsist = false;
      state.endChceckEmailExsist = false;
      state.serverError = false;
      state.addUser = false;
      state.deleteUser = false;
    },
  },
});

export const selectLoginUser = (state) => state.userStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectUserState = (state) => selectLoginUser(state).user[0];
export const selectEditAccount = (state) => selectLoginUser(state).editAccount;
export const selecPasswordExsist = (state) =>
  selectLoginUser(state).passwordExsist;
export const selectStatusUserOut = (state) => selectLoginUser(state).userOut;
export const selectStatusUser = (state) => selectLoginUser(state).loading;
export const selectStatusloadingOut = (state) =>
  selectLoginUser(state).loadingOut;
export const selectStatusEditAccount = (state) =>
  selectLoginUser(state).loadingEditAccount;
export const selectStatusEditPassword = (state) =>
  selectLoginUser(state).loadingEditPassword;
export const selectStatusTokenUser = (state) =>
  selectLoginUser(state).loadingTokenUser;
export const selectAddUser = (state) => selectLoginUser(state).addUser;
export const selectDeleteUser = (state) => selectLoginUser(state).deleteUser;
export const selectStatusLoadingAddOrDeleteUser = (state) =>
  selectLoginUser(state).loadingAddOrDeleteUser;
export const selectUserNotExist = (state) =>
  selectLoginUser(state).userNotExist;
export const selectEmailExsist = (state) => selectLoginUser(state).emailExsist;
export const selectEndChceckEmailExsist = (state) =>
  selectLoginUser(state).endChceckEmailExsist;
export const selectErrorServerUser = (state) =>
  selectLoginUser(state).serverError;

export const {
  fetchLoginUser,
  fetchLoginUserToken,
  fetchLoginUserOut,
  setLoginUser,
  setLoginOutUser,
  fetchEditAccount,
  setEditAccount,
  setEditUser,
  fetchEditPassword,
  setEditPassword,
  fetchAddUser,
  setAddUser,
  setDeleteUser,
  fetchDeleteUser,
  fetchEmailExsist,
  fetchPasswordExsist,
  setEmailExsist,
  setPasswordExsist,
  serverConnectionError,
  resetUserState,
} = userSlice.actions;

export default userSlice.reducer;

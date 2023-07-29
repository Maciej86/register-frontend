import { createSlice } from "@reduxjs/toolkit";

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: {
    user: [],
    userNotExist: false,
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
      if (user.length === 0) {
        state.loading = false;
        state.userNotExist = true;
      } else {
        state.loading = true;
      }
    },
    setUserNotExist: (state) => {
      state.userNotExist = false;
    },
  },
});

export const selectLoginUser = (state) => state.loginUserStore;
export const selectTokenSessionUserState = (state) =>
  selectLoginUser(state).user[0]?.token_login;
export const selectThemeUserState = (state) =>
  selectLoginUser(state).user[0]?.theme;
export const selectUserState = (state) => selectLoginUser(state).user;
export const selectStatusUser = (state) => selectLoginUser(state).loading;
export const selectUserNotExist = (state) =>
  selectLoginUser(state).userNotExist;

export const {
  fetchLoginUser,
  fetchLoginUserToken,
  setLoginUser,
  setUserNotExist,
} = loginUserSlice.actions;

export default loginUserSlice.reducer;

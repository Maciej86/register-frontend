import { createSlice } from "@reduxjs/toolkit";

const initialToggle = {
  toggle: false,
};

const toggleNavSlice = createSlice({
  name: "toggleNav",
  initialState: initialToggle,
  reducers: {
    setToggleNav: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const selectToggleNav = (state) => state.toggleNavStore;
export const selectToggleNavState = (state) => selectToggleNav(state).toggle;

export const { setToggleNav } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;

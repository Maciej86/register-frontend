import { createSlice } from "@reduxjs/toolkit";

const initialToggle = {
  toggle: false,
  toggleMobiel: false,
};

const toggleNavSlice = createSlice({
  name: "toggleNav",
  initialState: initialToggle,
  reducers: {
    setToggleNav: (state) => {
      state.toggle = !state.toggle;
    },
    setToggleMobileNav: (state) => {
      state.toggleMobiel = !state.toggleMobiel;
    },
  },
});

export const selectToggleNav = (state) => state.toggleNavStore;
export const selectToggleNavState = (state) => selectToggleNav(state).toggle;
export const selectToggleNavMobileState = (state) =>
  selectToggleNav(state).toggleMobiel;

export const { setToggleNav, setToggleMobileNav } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;

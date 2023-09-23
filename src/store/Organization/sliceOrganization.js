import { createSlice } from "@reduxjs/toolkit";

const initialOrganization = {
  userOrganization: [],
  allOrganizaton: [],
  loadingOrganization: false,
  loadingTokenOrganization: false,
  loadingNewOrganization: false,
  loadingAllOrganization: false,
  addNewOrganization: false,
  nameOrganizationExsist: false,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState: initialOrganization,
  reducers: {
    fetchUserOrganization: (state) => {
      state.loadingOrganization = true;
    },
    fetchTokenOrganization: (state) => {
      state.loadingTokenOrganization = true;
    },
    setUserOrganization: (state, { payload: organization }) => {
      state.userOrganization = organization;
      state.loadingOrganization = false;
      state.loadingTokenOrganization = false;
      state.loadingRefreshOrganization = false;
    },
    fetchAddNewOrganization: (state) => {
      state.loadingNewOrganization = true;
      state.addNewOrganization = false;
      state.nameOrganizationExsist = false;
    },
    setAddNewOrganization: (state, { payload: organization }) => {
      state.loadingNewOrganization = false;
      if (organization.length !== 0) {
        state.addNewOrganization = true;
        state.organization = organization;
      } else {
        state.nameOrganizationExsist = true;
      }
    },
    fetchAllOrganization: (state) => {
      state.loadingAllOrganization = true;
    },
    setAllOrganization: (state, { payload: organization }) => {
      state.allOrganizaton = organization;
      state.loadingAllOrganization = false;
    },
    resetOrganization: (state) => {
      state.addNewOrganization = false;
      state.nameOrganizationExsist = false;
    },
  },
});

export const selectOrganization = (state) => state.organizationStore;
export const selectUserOrganization = (state) =>
  selectOrganization(state).userOrganization;
export const selectAllOrganization = (state) =>
  selectOrganization(state).allOrganizaton;
export const selectLoadingOrganization = (state) =>
  selectOrganization(state).loadingOrganization;
export const selectLoadingAddOrganization = (state) =>
  selectOrganization(state).loadingNewOrganization;
export const selectLoadingAllOrganization = (state) =>
  selectOrganization(state).loadingAllOrganization;
export const selectAddNewOrganization = (state) =>
  selectOrganization(state).addNewOrganization;
export const selectNameOrganizationExsist = (state) =>
  selectOrganization(state).nameOrganizationExsist;
export const selectLoadingTokenOrganization = (state) =>
  selectOrganization(state).loadingTokenOrganization;

export const {
  fetchUserOrganization,
  fetchTokenOrganization,
  setUserOrganization,
  fetchAddNewOrganization,
  setAddNewOrganization,
  fetchAllOrganization,
  setAllOrganization,
  resetOrganization,
} = organizationSlice.actions;

export default organizationSlice.reducer;

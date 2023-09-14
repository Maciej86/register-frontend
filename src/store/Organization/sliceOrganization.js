import { createSlice } from "@reduxjs/toolkit";

const initialOrganization = {
  organization: [],
  loadingOrganization: false,
  loadingTokenOrganization: false,
  loadingNewOrganization: false,
  addNewOrganization: false,
  nameOrganizationExsist: false,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState: initialOrganization,
  reducers: {
    fetchOrganization: (state) => {
      state.loadingOrganization = true;
    },
    fetchTokenOrganization: (state) => {
      state.loadingTokenOrganization = true;
    },
    setOrganization: (state, { payload: organization }) => {
      state.organization = organization;
      state.loadingOrganization = false;
      state.loadingTokenOrganization = false;
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
    resetOrganization: (state) => {
      state.addNewOrganization = false;
      state.nameOrganizationExsist = false;
    },
  },
});

export const selectOrganization = (state) => state.organizationStore;
export const selectUserOrganization = (state) =>
  selectOrganization(state).organization;
export const selectLoadingOrganization = (state) =>
  selectOrganization(state).loadingOrganization;
export const selectLoadingAddOrganization = (state) =>
  selectOrganization(state).loadingNewOrganization;
export const selectAddNewOrganization = (state) =>
  selectOrganization(state).addNewOrganization;
export const selectNameOrganizationExsist = (state) =>
  selectOrganization(state).nameOrganizationExsist;
export const selectLoadingTokenOrganization = (state) =>
  selectOrganization(state).loadingTokenOrganization;

export const {
  fetchOrganization,
  fetchTokenOrganization,
  setOrganization,
  fetchAddNewOrganization,
  setAddNewOrganization,
  resetOrganization,
} = organizationSlice.actions;

export default organizationSlice.reducer;

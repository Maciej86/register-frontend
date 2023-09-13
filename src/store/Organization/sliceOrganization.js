import { createSlice } from "@reduxjs/toolkit";

const initialOrganization = {
  organization: [],
  loadingOrganization: false,
  loadingTokenOrganization: false,
  loadingNewOrganization: false,
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
    },
    setAddNewOrganization: (state, { payload: organization }) => {
      state.organization = organization;
      state.loadingNewOrganization = false;
    },
  },
});

export const selectOrganization = (state) => state.organizationStore;
export const selectUserOrganization = (state) =>
  selectOrganization(state).organization;
export const selectLoadingOrganization = (state) =>
  selectOrganization(state).loadingOrganization;
export const selectLoadingTokenOrganization = (state) =>
  selectOrganization(state).loadingTokenOrganization;

export const {
  fetchOrganization,
  fetchTokenOrganization,
  setOrganization,
  fetchAddNewOrganization,
} = organizationSlice.actions;

export default organizationSlice.reducer;

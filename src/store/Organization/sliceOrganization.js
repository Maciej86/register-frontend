import { createSlice } from "@reduxjs/toolkit";

const initialOrganization = {
  userOrganization: [],
  loadingOrganization: false,
  loadingTokenOrganization: false,
  loadingNewOrganization: false,
  loadingEditOrganization: false,
  loadingAllOrganization: false,
  addNewOrganization: false,
  nameOrganizationExsist: false,
  editNameOrganization: false,
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
        state.userOrganization = organization;
      } else {
        state.nameOrganizationExsist = true;
      }
    },
    fetchEditNameOrganization: (state) => {
      state.loadingEditOrganization = true;
    },
    setEditNameOrganization: (state, { payload: organization }) => {
      state.organization = organization;
      state.editNameOrganization = organization;
      state.loadingEditOrganization = false;
    },
    resetOrganizationState: (state) => {
      state.addNewOrganization = false;
      state.nameOrganizationExsist = false;
    },
  },
});

export const selectOrganization = (state) => state.organizationStore;
export const selectOneOrganization = (state) =>
  selectOrganization(state).organization;
export const selectUserOrganization = (state) =>
  selectOrganization(state).userOrganization;
export const selectAllOrganization = (state) =>
  selectOrganization(state).allOrganizaton;
export const selectLoadingOrganization = (state) =>
  selectOrganization(state).loadingOrganization;
export const selectLoadingAddOrganization = (state) =>
  selectOrganization(state).loadingNewOrganization;
export const selectLoadingEditOrganization = (state) =>
  selectOrganization(state).loadingEditOrganization;
export const selectLoadingAllOrganization = (state) =>
  selectOrganization(state).loadingAllOrganization;
export const selectAddNewOrganization = (state) =>
  selectOrganization(state).addNewOrganization;
export const selectNameOrganizationExsist = (state) =>
  selectOrganization(state).nameOrganizationExsist;
export const selectEditNameOrganization = (state) =>
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
  fetchEditNameOrganization,
  resetOrganizationState,
  setEditNameOrganization,
} = organizationSlice.actions;

export default organizationSlice.reducer;

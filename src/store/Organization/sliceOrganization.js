import { createSlice } from "@reduxjs/toolkit";

const initialOrganization = {
  userOrganization: [],
  usersInOutOrganization: [],
  loadingOrganization: false,
  loadingTokenOrganization: false,
  loadingNewOrganization: false,
  loadingEditOrganization: false,
  loadingAddOrDeleteUsersOrganization: false,
  loadingDeleteOrganization: false,
  addNewOrganization: false,
  nameOrganizationExsist: false,
  editNameOrganization: false,
  deleteOrganization: false,
  addOrDeleteUsersOrganization: false,
  serverError: false,
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
    fetchUsersInOutOrganization: (state) => {
      state.loadingOrganization = true;
    },
    setUserInOutOrganization: (state, { payload: organization }) => {
      state.usersInOutOrganization = organization;
      state.loadingOrganization = false;
    },
    fetchAddOrganization: (state) => {
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
      state.loadingEditOrganization = false;
      if (organization.length !== 0) {
        state.editNameOrganization = true;
        const index = state.userOrganization.findIndex(
          (item) => item.id_organization === organization[0].id
        );

        if (index !== -1) {
          state.userOrganization[index].name_organization =
            organization[0].name_organization;
        }
      } else {
        state.nameOrganizationExsist = true;
      }
    },
    fetchAddOrDeleteUsersOrganization: (state) => {
      state.loadingAddOrDeleteUsersOrganization = true;
    },
    setAddOrDeleteUserInOrganization: (state, { payload: organization }) => {
      state.usersInOutOrganization = organization;
      state.loadingAddOrDeleteUsersOrganization = false;
      state.addOrDeleteUsersOrganization = true;
    },
    fetchDeleteOrganization: (state) => {
      state.loadingDeleteOrganization = true;
    },
    setDeleteOrganization: (state) => {
      state.loadingDeleteOrganization = false;
      state.deleteOrganization = true;
    },
    serverConnectionError: (state) => {
      state.serverError = true;
      state.loadingOrganization = false;
      state.loadingNewOrganization = false;
      state.loadingEditOrganization = false;
      state.loadingAddOrDeleteUsersOrganization = false;
      state.loadingDeleteOrganization = false;
    },
    resetOrganizationState: (state) => {
      state.addNewOrganization = false;
      state.nameOrganizationExsist = false;
      state.editNameOrganization = false;
      state.addOrDeleteUsersOrganization = false;
      state.deleteOrganization = false;
      state.serverError = false;
    },
  },
});

export const selectOrganization = (state) => state.organizationStore;
export const selectOneOrganization = (state) =>
  selectOrganization(state).organization;
export const selectUserOrganization = (state) =>
  selectOrganization(state).userOrganization;
export const selectUsersInOutOrganization = (state) =>
  selectOrganization(state).usersInOutOrganization;
export const selectLoadingOrganization = (state) =>
  selectOrganization(state).loadingOrganization;
export const selectLoadingAddOrganization = (state) =>
  selectOrganization(state).loadingNewOrganization;
export const selectLoadingEditOrganization = (state) =>
  selectOrganization(state).loadingEditOrganization;
export const selectLoadingAddOrDeleteUsersOrganization = (state) =>
  selectOrganization(state).loadingAddOrDeleteUsersOrganization;
export const selectAddNewOrganization = (state) =>
  selectOrganization(state).addNewOrganization;
export const selectNameOrganizationExsist = (state) =>
  selectOrganization(state).nameOrganizationExsist;
export const selectEditNameOrganization = (state) =>
  selectOrganization(state).editNameOrganization;
export const selectLoadingTokenOrganization = (state) =>
  selectOrganization(state).loadingTokenOrganization;
export const selectAddOrDeleteUsersOrganization = (state) =>
  selectOrganization(state).addOrDeleteUsersOrganization;
export const selectloadingDeleteOrganization = (state) =>
  selectOrganization(state).loadingDeleteOrganization;
export const selectDeleteOrganization = (state) =>
  selectOrganization(state).deleteOrganization;
export const selectServerErrorOrganization = (state) =>
  selectOrganization(state).serverError;

export const {
  fetchUserOrganization,
  fetchTokenOrganization,
  setUserOrganization,
  fetchAddOrganization,
  setAddNewOrganization,
  fetchEditNameOrganization,
  setEditNameOrganization,
  fetchUsersInOutOrganization,
  setUserInOutOrganization,
  fetchAddOrDeleteUsersOrganization,
  setAddOrDeleteUserInOrganization,
  fetchDeleteOrganization,
  setDeleteOrganization,
  serverConnectionError,
  resetOrganizationState,
} = organizationSlice.actions;

export default organizationSlice.reducer;

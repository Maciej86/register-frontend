import { createSlice } from "@reduxjs/toolkit";

const confirmSlice = createSlice({
  name: "confirm",
  initialState: {
    confirmModal: [],
  },
  reducers: {
    addConfirm: (state, { payload: confirm }) => {
      state.confirmModal.push(confirm);
    },
    removeConfirm: (state, { payload: modalId }) => {
      const index = state.confirmModal.findIndex(
        (status) => status.id === modalId
      );
      state.confirmModal.splice(index, 1);
    },
    removeAutoConfirm: (state) => {
      state.confirmModal.splice(0, 1);
    },
  },
});

export const selectConfirm = (state) => state.confirmStore;
export const selectConfirmState = (state) => selectConfirm(state).confirmModal;

export const { addConfirm, removeConfirm, removeAutoConfirm } =
  confirmSlice.actions;

export default confirmSlice.reducer;

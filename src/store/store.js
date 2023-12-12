import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../core/rootSaga";
import userSlice from "./User/sliceUser";
import organizationSlice from "./Organization/sliceOrganization";
import toggleNavSlice from "../features/Bar/sliceBar";
import confirmSlice from "../features/Confirm/sliceConfirm";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    toggleNavStore: toggleNavSlice,
    userStore: userSlice,
    confirmStore: confirmSlice,
    organizationStore: organizationSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import loginUserSlice from "../common/User/sliceUser";
import organizationSlice from "../common/Organization/sliceOrganization";
import toggleNavSlice from "../features/Bar/sliceBar";
import confirmSlice from "../features/Confirm/sliceConfirm";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    toggleNavStore: toggleNavSlice,
    loginUserStore: loginUserSlice,
    confirmStore: confirmSlice,
    organizationStore: organizationSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

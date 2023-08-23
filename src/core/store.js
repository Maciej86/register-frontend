import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import toggleNavSlice from "../features/Bar/sliceBar";
import loginUserSlice from "../features/Login/sliceLoginUser";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    toggleNavStore: toggleNavSlice,
    loginUserStore: loginUserSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

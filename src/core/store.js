import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import loginUserSlice from "../features/Login/sliceLoginUser";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    loginUserStore: loginUserSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

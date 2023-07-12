import { all } from "redux-saga/effects";
import { loginUserSaga } from "../features/Login/sagaLoginUser";

function* rootSaga() {
  yield all([loginUserSaga()]);
}

export default rootSaga;

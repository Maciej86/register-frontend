import { all } from "redux-saga/effects";
import { loginUserSaga } from "./user/sagaUser";

function* rootSaga() {
  yield all([loginUserSaga()]);
}

export default rootSaga;

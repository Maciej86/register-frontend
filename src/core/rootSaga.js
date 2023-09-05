import { all } from "redux-saga/effects";
import { loginUserSaga } from "../common/User/sagaUser";

function* rootSaga() {
  yield all([loginUserSaga()]);
}

export default rootSaga;

import { all } from "redux-saga/effects";
import { loginUserSaga } from "../common/user/sagaUser";

function* rootSaga() {
  yield all([loginUserSaga()]);
}

export default rootSaga;

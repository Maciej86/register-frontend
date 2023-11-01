import { all } from "redux-saga/effects";
import { loginUserSaga } from "../store/User/sagaUser";
import { organizationSaga } from "../store/Organization/sagaOrganization";

function* rootSaga() {
  yield all([loginUserSaga(), organizationSaga()]);
}

export default rootSaga;

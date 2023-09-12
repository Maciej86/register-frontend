import { all } from "redux-saga/effects";
import { loginUserSaga } from "../common/User/sagaUser";
import { organizationSaga } from "../common/Organization/sagaOrganization";

function* rootSaga() {
  yield all([loginUserSaga(), organizationSaga()]);
}

export default rootSaga;

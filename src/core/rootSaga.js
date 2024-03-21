import { all } from "redux-saga/effects";
import { userSaga } from "../store/User/sagaUser";
import { organizationSaga } from "../store/Organization/sagaOrganization";

function* rootSaga() {
  yield all([userSaga(), organizationSaga()]);
}

export default rootSaga;

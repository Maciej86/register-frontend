import { all } from "redux-saga/effects";
import { userSaga } from "@storeUser/sagaUser";
import { organizationSaga } from "@storeOrganization/sagaOrganization";

function* rootSaga() {
  yield all([userSaga(), organizationSaga()]);
}

export default rootSaga;

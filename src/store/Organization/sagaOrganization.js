import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { URL_ORGANIZATION } from "../../core/urlBackend";
import {
  fetchAddNewOrganization,
  fetchOrganization,
  fetchTokenOrganization,
  setOrganization,
} from "./sliceOrganization";

const timeDelay = 700;

function* fetchOrganizationHandler({ payload: id }) {
  try {
    const organization = yield axios.post(URL_ORGANIZATION.FETCH_ORGANIZATION, {
      id: id,
    });
    yield delay(timeDelay);
    yield put(setOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchAddNewOrganizationHandler({ payload: name }) {
  console.log(name);
}

export function* organizationSaga() {
  yield takeEvery(
    [fetchOrganization.type, fetchTokenOrganization.type],
    fetchOrganizationHandler
  );
  yield takeEvery(fetchAddNewOrganization.type, fetchAddNewOrganizationHandler);
}

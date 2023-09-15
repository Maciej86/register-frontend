import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { URL_ORGANIZATION } from "../../core/urlBackend";
import {
  fetchAddNewOrganization,
  fetchAllOrganization,
  fetchOrganization,
  fetchRefreshOrganization,
  fetchTokenOrganization,
  setAddNewOrganization,
  setAllOrganization,
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

function* fetchAddNewOrganizationHandler({ payload: data }) {
  try {
    const organization = yield axios.post(URL_ORGANIZATION.ADD_ORGANIZATION, {
      idUser: data.idUser,
      name: data.name,
    });
    yield delay(timeDelay);
    yield put(setAddNewOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchAllOrganizationHandler() {
  try {
    const organization = yield axios.post(URL_ORGANIZATION.ALL_ORGANIZATION);
    yield delay(timeDelay);
    yield put(setAllOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

export function* organizationSaga() {
  yield takeEvery(
    [fetchOrganization.type, fetchTokenOrganization.type],
    fetchOrganizationHandler
  );
  yield takeEvery(fetchAddNewOrganization.type, fetchAddNewOrganizationHandler);
  yield takeEvery(fetchAllOrganization.type, fetchAllOrganizationHandler);
}

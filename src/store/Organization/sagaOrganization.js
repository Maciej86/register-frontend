import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { URL_ORGANIZATION } from "../../core/urlBackend";
import {
  fetchAddNewOrganization,
  fetchTokenOrganization,
  setAddNewOrganization,
  setUserOrganization,
  fetchEditNameOrganization,
  setEditNameOrganization,
  fetchUserOrganization,
  fetchDeleteUserInOrganization,
  setDeleteUserInOrganization,
  fetchUsersInOrganization,
  setUserInOrganization,
} from "./sliceOrganization";

const timeDelay = 700;

function* fetchUserOrganizationHandler({ payload: id }) {
  try {
    const organization = yield axios.post(
      URL_ORGANIZATION.FETCH_USER_ORGANIZATION,
      {
        id: id,
      }
    );
    yield delay(timeDelay);
    yield put(setUserOrganization(organization.data));
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
    yield put(setUserOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchEditNameOrganizationHandler({ payload: data }) {
  try {
    const organization = yield axios.post(
      URL_ORGANIZATION.FETCH_EDIT_NAME_ORGANIZATION,
      {
        id: data.id,
        name: data.name,
      }
    );
    yield delay(timeDelay);
    yield put(setEditNameOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchUsersInOrganizationHandler({ payload: data }) {
  try {
    const organization = yield axios.post(
      URL_ORGANIZATION.FETCH_USER_IN_ORGANIZATION,
      {
        id: data.id,
      }
    );
    yield delay(timeDelay);
    yield put(setUserInOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchDeleteUserInOrganizationHandler({ payload: data }) {
  try {
    const organization = yield axios.post(
      URL_ORGANIZATION.FETCH_DELETE_USER_IN_ORGANIZATION,
      {
        idUsers: data.idsUsers,
        idOrganization: data.idOrganization,
      }
    );
    yield delay(timeDelay);
    yield put(setDeleteUserInOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

export function* organizationSaga() {
  yield takeEvery(
    [
      fetchUserOrganization.type,
      fetchTokenOrganization.type,
      fetchAddNewOrganization.type,
    ],
    fetchUserOrganizationHandler
  );
  yield takeEvery(fetchAddNewOrganization.type, fetchAddNewOrganizationHandler);
  yield takeEvery(
    fetchEditNameOrganization.type,
    fetchEditNameOrganizationHandler
  );
  yield takeEvery(
    fetchUsersInOrganization.type,
    fetchUsersInOrganizationHandler
  );
  yield takeEvery(
    fetchDeleteUserInOrganization.type,
    fetchDeleteUserInOrganizationHandler
  );
}

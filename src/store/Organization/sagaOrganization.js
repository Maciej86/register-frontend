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
  fetchAddOrDeleteUsersOrganization,
  setDeleteUserInOrganization,
  fetchUsersInOutOrganization,
  setUserInOutOrganization,
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
      data.inOut
        ? URL_ORGANIZATION.FETCH_USER_IN_ORGANIZATION
        : URL_ORGANIZATION.FETCH_USER_OUT_ORGANIZATION,
      {
        id: data.id,
      }
    );
    yield delay(timeDelay);
    yield put(setUserInOutOrganization(organization.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchAddOrDeleteUsersOrganizationHandler({ payload: data }) {
  try {
    const organization = yield axios.post(
      data.inOut
        ? URL_ORGANIZATION.FETCH_DELETE_USER_IN_ORGANIZATION
        : URL_ORGANIZATION.FETCH_ADD_USER_FOR_ORGANIZATION,
      {
        idUsers: data.idUsers,
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
    fetchUsersInOutOrganization.type,
    fetchUsersInOrganizationHandler
  );
  yield takeEvery(
    fetchAddOrDeleteUsersOrganization.type,
    fetchAddOrDeleteUsersOrganizationHandler
  );
}

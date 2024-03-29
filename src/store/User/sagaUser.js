import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { URL_USER } from "@core/urlApi";
import {
  fetchEmailExsist,
  fetchEditPassword,
  fetchEditAccount,
  fetchLoginUser,
  fetchLoginUserOut,
  fetchLoginUserToken,
  serverConnectionError,
  setEmailExsist,
  setEditPassword,
  setEditAccount,
  setLoginOutUser,
  setLoginUser,
  fetchAddUser,
  setAddUser,
  setDeleteUser,
  fetchDeleteUser,
  fetchPasswordExsist,
  setPasswordExsist,
  setEditUser,
} from "./sliceUser";
import {
  fetchUserOrganization,
  fetchTokenOrganization,
} from "../Organization/sliceOrganization";
import { saveDataInSessionStorage } from "./saveSessionStorage";
const timeDelay = 700;

function* fechLoginUserHandler({ payload: dataUser }) {
  try {
    const user = yield axios.post(URL_USER.LOGIN_USER, {
      email: dataUser.login,
      password: dataUser.password,
    });
    yield delay(timeDelay);
    yield put(fetchUserOrganization(user.data[0]?.id));
    yield put(setLoginUser(user.data));
    if (user.data.length !== 0) {
      yield call(
        saveDataInSessionStorage,
        "token_user",
        user.data[0]?.token_login
      );
    }
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchLoginUserTokenHandler({ payload: token }) {
  try {
    const user = yield axios.post(URL_USER.LOGIN_USER_TOKEN, {
      token: token,
    });
    yield delay(timeDelay);
    yield put(fetchTokenOrganization(user.data[0]?.id));
    yield put(setLoginUser(user.data));
  } catch (error) {
    yield console.error(error);
  }
}

function* fetchLoginUserOutTokenHandler({ payload: id }) {
  try {
    yield axios.post(URL_USER.LOGIN_OUT_USER, {
      id: id,
    });
    yield delay(timeDelay);
    yield put(setLoginOutUser());
  } catch (error) {
    yield console.error(error);
  }
}

function* fechEditUserHandler({ payload: dataUser }) {
  try {
    const user = yield axios.post(URL_USER.EDIT_ACCOUNT, {
      id: dataUser.id,
      name: dataUser.name,
      lastname: dataUser.lastname,
      email: dataUser.email,
      role: dataUser.role,
      theme: dataUser.theme,
    });
    yield delay(timeDelay);
    switch (dataUser.myaccount) {
      case true:
        yield put(setEditAccount(user.data));
        break;
      default:
        yield put(setEditUser(user.data));
    }
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

function* fetchEditPasswordHandler({ payload: passwordUser }) {
  try {
    const changedPassword = yield axios.post(URL_USER.CHANGED_PASSWORD, {
      id: passwordUser.id,
      newpassword: passwordUser.newpassword,
    });
    yield delay(timeDelay);
    yield put(setEditPassword(changedPassword.data));
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

function* fetchEditEmailHandler({ payload: newEmail }) {
  try {
    const checkEmailExsist = yield axios.post(URL_USER.EMAIL_EXSIST, {
      email: newEmail,
    });
    yield delay(timeDelay);
    yield put(setEmailExsist(checkEmailExsist.data));
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

function* fetchPasswordExsistHandler({ payload: password }) {
  try {
    const passwordExsist = yield axios.post(URL_USER.PASSWORD_EXSIST, {
      id: password.idUser,
      oldpassword: password.currentPassword,
    });
    yield delay(timeDelay);
    yield put(setPasswordExsist(passwordExsist.data));
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

function* fetchAddUserHandler({ payload: dataUser }) {
  try {
    const addUser = yield axios.post(URL_USER.ADD_USER, {
      name: dataUser.name,
      lastName: dataUser.lastName,
      email: dataUser.email,
      type: dataUser.type,
      password: dataUser.password,
      organizations: dataUser.organizations,
    });
    yield delay(timeDelay);
    yield put(setAddUser(addUser.data));
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

function* fetchDeleteUserHandler({ payload: id }) {
  try {
    const deleteUser = yield axios.post(URL_USER.DELETE_USER, {
      idUser: id,
    });
    yield delay(timeDelay);
    yield put(setDeleteUser(deleteUser.data));
  } catch (error) {
    yield console.error(error);
    yield put(serverConnectionError());
  }
}

export function* userSaga() {
  yield takeEvery(fetchLoginUser.type, fechLoginUserHandler);
  yield takeEvery(fetchLoginUserToken.type, fetchLoginUserTokenHandler);
  yield takeEvery(fetchLoginUserOut.type, fetchLoginUserOutTokenHandler);
  yield takeEvery(fetchEditAccount.type, fechEditUserHandler);
  yield takeEvery(fetchEditPassword.type, fetchEditPasswordHandler);
  yield takeEvery(fetchEmailExsist.type, fetchEditEmailHandler);
  yield takeEvery(fetchPasswordExsist.type, fetchPasswordExsistHandler);
  yield takeEvery(fetchAddUser.type, fetchAddUserHandler);
  yield takeEvery(fetchDeleteUser.type, fetchDeleteUserHandler);
}

import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchEditPassword,
  fetchEditUser,
  fetchLoginUser,
  fetchLoginUserOut,
  fetchLoginUserToken,
  setEditPassword,
  setEditUser,
  setLoginOutUser,
  setLoginUser,
} from "./sliceUser";
import { saveDataInSessionStorage } from "./saveSessionStorage";

import { URL_USER } from "../../core/urlBackend";

function* fechLoginUserHandler({ payload: dataUser }) {
  try {
    const user = yield axios.post(URL_USER.LOGIN_USER, {
      email: dataUser.login,
      password: dataUser.password,
    });
    yield delay(1500);
    yield put(setLoginUser(user.data));
    if (user.data.length !== 0) {
      yield call(
        saveDataInSessionStorage,
        "token_user",
        user.data[0]?.token_login
      );
    }
  } catch (error) {
    yield console.log(error);
  }
}

function* fetchLoginUserTokenHandler({ payload: token }) {
  try {
    const user = yield axios.post(URL_USER.LOGIN_USER_TOKEN, {
      token: token,
    });
    yield delay(1500);
    yield put(setLoginUser(user.data));
  } catch (error) {
    yield console.log(error);
  }
}

function* fetchLoginUserOutTokenHandler({ payload: id }) {
  try {
    yield axios.post(URL_USER.LOGIN_OUT_USER, {
      id: id,
    });
    yield delay(1500);
    yield put(setLoginOutUser());
  } catch (error) {
    yield console.log(error);
  }
}

function* fechEditUserHandler({ payload: dataUser }) {
  try {
    const user = yield axios.post(URL_USER.EDIT_USER, {
      id: dataUser.id,
      name: dataUser.name,
      lastname: dataUser.lastname,
      email: dataUser.email,
      theme: dataUser.theme,
    });
    yield delay(1500);
    yield put(setEditUser(user.data));
  } catch (error) {
    yield console.log(error);
  }
}

function* fetchEditPasswordHandler({ payload: passwordUser }) {
  console.log(passwordUser);
  try {
    const changedPassword = yield axios.post(URL_USER.CHANGED_PASSWORD, {
      id: passwordUser.id,
      oldpassword: passwordUser.oldpassword,
      newpassword: passwordUser.newpassword,
    });
    yield delay(1500);
    yield put(setEditPassword(changedPassword.data));
  } catch (error) {
    yield console.log(error);
  }
}

export function* loginUserSaga() {
  yield takeEvery(fetchLoginUser.type, fechLoginUserHandler);
  yield takeEvery(fetchLoginUserToken.type, fetchLoginUserTokenHandler);
  yield takeEvery(fetchLoginUserOut.type, fetchLoginUserOutTokenHandler);
  yield takeEvery(fetchEditUser.type, fechEditUserHandler);
  yield takeEvery(fetchEditPassword.type, fetchEditPasswordHandler);
}

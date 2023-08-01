import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchLoginUser,
  fetchLoginUserToken,
  setLoginUser,
} from "./sliceLoginUser";
import { saveDataInSessionStorage } from "../../core/saveSessionStorage";

import { URL_USER } from "../../core/urlBackend";

function* fechLoginUserHandler({ payload: dataUser }) {
  try {
    const user = yield axios.post(URL_USER.LOGIN_USER, {
      name: dataUser.login,
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

export function* loginUserSaga() {
  yield takeEvery(fetchLoginUser.type, fechLoginUserHandler);
  yield takeEvery(fetchLoginUserToken.type, fetchLoginUserTokenHandler);
}

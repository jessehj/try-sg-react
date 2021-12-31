import { takeEvery, call, put } from "redux-saga/effects";
import { createAction } from "redux-actions";

import { LoginInfo, UserInfo } from "../../@types/logintype";
import { fail, success, pending } from "../modules/login";
import { loginApi } from "../../network/api/loginApi";
import { AxiosResponse } from "axios";

const prefix = "try-sg-react/login";
const LOGIN = `${prefix}/LOGIN`;

export const login = createAction(LOGIN, (req: LoginInfo) => req);

function* loginSaga() {
  try {
    /* yield put(pending());
    const res: AxiosResponse<UserInfo> = yield call(loginApi(action.payload));
    yield put(success(res.data)); */
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    yield put(fail(error));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, loginSaga);
}

import { put, call, takeEvery, delay } from "redux-saga/effects";
import { loginAsync } from "../../modules/login";
import { loginApi } from "../../../pages/LoginPage/api";
import { LoginResType } from "../../../pages/LoginPage/@types";

function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res: LoginResType = yield call(loginApi, action.payload);
    yield put(delay(1000));
    yield put(loginAsync.success(res.row));
  } catch (error: any | Error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    yield put(loginAsync.failure(error));
  }
}

export function* watchLogin() {
  yield takeEvery(loginAsync.request, loginSaga);
}

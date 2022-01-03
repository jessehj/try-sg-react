import { call, put, takeLatest, all } from "redux-saga/effects";
import { AxiosError } from "axios";
import { sendLoginAPI } from "../../network/apis";
import { SEND_LOGIN_REQUEST, sendLoginAction } from "../actions";
import { LoginResponseInterface } from "../../network/types";

function* sendLoginSaga(action: ReturnType<typeof sendLoginAction.request>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: LoginResponseInterface = yield call(
      sendLoginAPI,
      action.payload
    );
    yield put(sendLoginAction.success(response));
  } catch (err) {
    yield put(sendLoginAction.failure(err as AxiosError));
  }
}
export function* testSaga() {
  yield takeLatest(SEND_LOGIN_REQUEST, sendLoginSaga);
}

export function* rootSaga() {
  yield all([testSaga()]);
}

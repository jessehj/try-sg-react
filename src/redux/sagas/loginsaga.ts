import { put, call, takeEvery } from "redux-saga/effects";
import { loginAsync } from "../modules/login";
import { axiosInstance } from "../../network/api";
import { LoginReqType, LoginResType } from "../../@types/logintype";

async function loginApi(req: LoginReqType): Promise<LoginResType> {
  const res = await axiosInstance.post<LoginResType>(
    "/account/sessions/me",
    req
  );
  return res.data;
}

function* loginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res: LoginResType = yield call(loginApi, action.payload);
    yield put(loginAsync.success(res.row));
  } catch (error: any | Error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    yield put(loginAsync.failure(error));
  }
}

export function* watchLogin() {
  yield takeEvery(loginAsync.request, loginSaga);
}

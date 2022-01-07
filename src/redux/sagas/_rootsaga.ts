import { all } from "redux-saga/effects";
import { watchLogin } from "./loginSaga";

function* sagaRoot() {
  yield all([watchLogin()]);
}

export default sagaRoot;

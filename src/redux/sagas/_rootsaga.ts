import { all } from "redux-saga/effects";
import { watchLogin } from "./loginsaga";

function* sagaRoot() {
  yield all([watchLogin()]);
}

export default sagaRoot;

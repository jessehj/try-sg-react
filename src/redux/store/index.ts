import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import login from "../reducer";
import sagaRoot from "../sagas/_rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  login,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaRoot);

export default store;

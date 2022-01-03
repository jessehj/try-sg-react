import { createReducer, ActionType } from "typesafe-actions";
import { combineReducers } from "redux";
import { SEND_LOGIN_SUCCESS, sendLoginAction } from "../actions";

import { LoginResponseInterface } from "../../network/types";

type LoginAction = ActionType<typeof sendLoginAction>;

const initialState: LoginResponseInterface = {
  row: {
    accountId: "noUser",
    name: "noUser",
  },
};
const login = createReducer<LoginResponseInterface, LoginAction>(initialState, {
  [SEND_LOGIN_SUCCESS]: (state, action) => action.payload,
});

const rootReducer = combineReducers({ login });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

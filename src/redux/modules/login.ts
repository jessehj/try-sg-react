import { createReducer, ActionType, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { LoginReqType, LoginState, UserType } from "../../@types/logintype";

const prefix = "try-sg-react/login";
export const PENDING = `${prefix}/PENDING` as const;
export const SUCCESS = `${prefix}/SUCCESS` as const;
export const FAIL = `${prefix}/FAIL` as const;

export const loginAsync = createAsyncAction(PENDING, SUCCESS, FAIL)<
  LoginReqType,
  UserType,
  AxiosError
>();

const actions = { loginAsync };
type LoginActionType = ActionType<typeof actions>;

const initialState: LoginState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = createReducer<LoginState, LoginActionType>(initialState, {
  [PENDING]: (state) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [SUCCESS]: (state, { payload }) => ({
    data: payload,
    isLoading: false,
    error: null,
  }),
  [FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
});

export default reducer;

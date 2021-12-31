import { createAction, handleActions } from "redux-actions";
import { LoginState, UserInfo } from "../../@types/logintype";

const prefix = "try-sg-react/login";

const PENDING = `${prefix}/PENDING` as const;
const SUCCESS = `${prefix}/SUCCESS` as const;
const FAIL = `${prefix}/FAIL` as const;

export const pending = createAction(PENDING);
export const success = createAction(SUCCESS, (req: UserInfo) => req);
export const fail = createAction(FAIL, (err: Error) => err);

const initialState: LoginState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = handleActions<LoginState, UserInfo>(
  {
    [PENDING]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [SUCCESS]: (state, { payload }) => ({
      data: payload,
      loading: false,
      error: null,
    }),
    [FAIL]: (state, action: any) => ({
      ...state,
      loading: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      error: action.payload,
    }),
  },
  initialState
);

export default reducer;

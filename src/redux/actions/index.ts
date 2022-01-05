import { createAction, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import {
  LoginRequestInterface,
  LoginResponseInterface,
} from "../../network/types";

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const SEND_LOGIN_SUCCESS = "SEND_LOGIN_SUCCESS";
export const SEND_LOGIN_FAILURE = "SEND_LOGIN_FAILURE";
export const TURN_ON_OFF_MODAL = "TURN_ON_MODAL";

export const modalONOFFAction = createAction(TURN_ON_OFF_MODAL);

export const sendLoginAction = createAsyncAction(
  SEND_LOGIN_REQUEST,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE
)<LoginRequestInterface, LoginResponseInterface, AxiosError>();

import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { LoginResponseInterface } from "../../network/types";

export const SEND_LOGIN_REQUEST = "SEND_LOGIN_REQUEST";
export const SEND_LOGIN_SUCCESS = "SEND_LOGIN_SUCCESS";
export const SEND_LOGIN_FAILURE = "SEND_LOGIN_FAILURE";

export const sendLoginAction = createAsyncAction(
  SEND_LOGIN_REQUEST,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE
)<string, LoginResponseInterface, AxiosError>();

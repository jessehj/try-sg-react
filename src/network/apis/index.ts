import axios, { AxiosError, AxiosResponse } from "axios";
import { DefaultErrorInterface, LoginResponseInterface } from "../types";
import { ErrorCode, HttpMethod, URL } from "../constants";

import Request from "../request";

export const sendLoginAPI = async (
  data: FormData | unknown | string
): Promise<unknown | AxiosResponse<LoginResponseInterface>> => {
  try {
    const res = await Request({
      method: HttpMethod.POST,
      url: URL.LOGIN_POST,
      data,
    });

    axios.defaults.headers.common["x-auth-token"] = res.headers["x-auth-token"];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res.data;
  } catch (error) {
    if (
      (error as AxiosError<DefaultErrorInterface>).response?.data.code ===
      ErrorCode.NO_USER
    ) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data;
    }
    if (
      (error as AxiosError<DefaultErrorInterface>).response?.data.code ===
      ErrorCode.WRONG_PASSWORD
    ) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data;
    }
    return error;
  }
};
export const sendLogout = async (): Promise<any> => {
  try {
    const res = await Request({
      url: URL.LOGOUT_DELETE,
      method: HttpMethod.DELETE,
    });
    return res;
  } catch (error) {
    return error;
  }
};

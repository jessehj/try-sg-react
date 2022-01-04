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
    console.log(res.data);
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
export const getUserInfo = async (): Promise<string | undefined> => {
  try {
    const res: AxiosResponse = await Request({
      method: HttpMethod.GET,
      url: URL.MYPAGE_GET,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return JSON.stringify(res?.data.row);
  } catch (error) {
    if ((error as AxiosError<DefaultErrorInterface>).response?.data) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data?.code;
    }
    return "error";
  }
};
export const checkDuplicate = async (
  data: string | undefined
): Promise<unknown | AxiosResponse<DefaultErrorInterface>> => {
  try {
    if (!data) return "empty";

    await Request({
      method: HttpMethod.POST,
      url: `${URL.DUPLICATION_ID_GET}/${data}`,
    });
    return "ok";
  } catch (error) {
    if (
      (error as AxiosError<DefaultErrorInterface>).response?.data.code ===
      ErrorCode.DUPLICATE_UD
    ) {
      return "no";
    }

    return error;
  }
};
export const sendPhoneAuthReq = async (
  data: string | undefined
): Promise<unknown | AxiosResponse<DefaultErrorInterface>> => {
  try {
    if (!data) return "empty";
    await Request({
      method: HttpMethod.POST,
      url: `${URL.SEND_MSG_TOKEN_POST}`,
      data,
    });
    return "ok";
  } catch (error) {
    if (
      (error as AxiosError<DefaultErrorInterface>).response?.data.code ===
      ErrorCode.REQUIRE_PHONE
    ) {
      return "empty";
    }
    if (
      (error as AxiosError<DefaultErrorInterface>).response?.data.code ===
      ErrorCode.INVALID_PHONE
    ) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data.code;
    }
    return error;
  }
};
export const sendPhoneAuthVerification = async (
  data: string | undefined
): Promise<unknown | AxiosResponse<DefaultErrorInterface>> => {
  try {
    if (!data) return "empty";
    const res: AxiosResponse<any, any> = await Request({
      method: HttpMethod.POST,
      url: `${URL.SEND_MSG_TOKEN_POST}/${data}/verification`,
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res.data;
  } catch (error) {
    if (error as AxiosError<DefaultErrorInterface>) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data.code;
    }

    return error;
  }
};

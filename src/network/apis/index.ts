import axios, { AxiosError, AxiosResponse } from "axios";
import {
  DefaultErrorInterface,
  LoginRequestInterface,
  LoginResponseInterface,
  PhoneRequestInterface,
  PhoneTokenResponseInterface,
  PostRowResponseInterface,
  PostsDetailInterface,
  PostsRowsResponseInterface,
  SignUpRequestInterface,
} from "../types";
import { ErrorCode, HttpMethod, URL } from "../constants";

import Request from "../request";

export const sendLoginAPI = async (
  data: LoginRequestInterface
): Promise<unknown | AxiosResponse<LoginResponseInterface>> => {
  try {
    const res = await Request({
      method: HttpMethod.POST,
      url: URL.LOGIN_POST,
      data,
    });
    console.log(res.headers);
    axios.defaults.headers.common["x-auth-token"] = res.headers["x-auth-token"];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res.data;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      console.log((error as AxiosError).response?.data);
    }
    console.log((error as AxiosError).response?.data);
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
      method: HttpMethod.GET,
      url: `${URL.DUPLICATION_ID_GET}/${data}`,
    });
    return "ok";
  } catch (error) {
    console.log(error);
    if ((error as AxiosError<DefaultErrorInterface>).response?.status === 409) {
      return "duplicate";
    }

    return error;
  }
};
export const sendPhoneAuthReq = async (
  data: PhoneRequestInterface | undefined
): Promise<unknown | AxiosResponse<DefaultErrorInterface>> => {
  try {
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
  data: PhoneRequestInterface,
  token: string | undefined
): Promise<PhoneTokenResponseInterface | string> => {
  try {
    if (!data) return "empty";
    const res: AxiosResponse<any, any> = await Request({
      method: HttpMethod.POST,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      url: `${URL.SEND_MSG_TOKEN_POST}/${token}/verification`,
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return res.data;
  } catch (error) {
    if (error as AxiosError<DefaultErrorInterface>) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data
        ?.code as string;
    }

    return "Error";
  }
};
export const sendSignUp = async (
  data: SignUpRequestInterface
): Promise<LoginResponseInterface | string> => {
  try {
    if (!data) return "empty";
    const res: AxiosResponse<any, any> = await Request({
      method: HttpMethod.POST,
      url: URL.SIGN_UP,
      data,
    });
    return res.data as LoginResponseInterface;
  } catch (err) {
    if (err as AxiosError<DefaultErrorInterface>) {
      return (err as AxiosError<DefaultErrorInterface>).response?.data
        ?.code as string;
    }
    return "Error";
  }
};
export async function uploadFiles(
  data: FormData
): Promise<AxiosError | unknown | AxiosResponse<any>> {
  try {
    const res = await Request({
      method: HttpMethod.POST,
      url: URL.POST_UPLOAD_IMAGE_POST,
      data,
    });
    return res;
  } catch (error) {
    if (error as AxiosError) return error;
    return error;
  }
}
export const getPosts = async (data: {
  limit: number;
  page: number;
  keyword: string;
}): Promise<AxiosResponse<PostRowResponseInterface> | AxiosError | unknown> => {
  try {
    const res = await Request({
      method: HttpMethod.GET,
      url: URL.POST_GET,
      queryParams: data,
    });

    return res;
  } catch (error) {
    if (error as AxiosError) return error;
    return error;
  }
};
export const deletePosts = async (
  data: number
): Promise<string | AxiosError | unknown> => {
  try {
    await Request({
      method: HttpMethod.DELETE,
      url: `${URL.POST_DELETE}/${data}`,
    });
    return "ok";
  } catch (error) {
    if (error as AxiosError) {
      if ((error as AxiosError).response?.status === 404) {
        return (error as AxiosError<DefaultErrorInterface>).response?.data.code;
      }
    }
    return error;
  }
};

export const reWritePosts = async (
  data: PostsDetailInterface
): Promise<AxiosResponse<PostsRowsResponseInterface> | string | unknown> => {
  try {
    const res = await Request({
      method: HttpMethod.PUT,
      url: `${URL.POST_PUT}/${data.id}`,
    });
    return res;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      return (error as AxiosError<DefaultErrorInterface>).response?.data.code;
    }
    return error;
  }
};

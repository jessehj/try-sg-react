import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import QueryString from "qs";
import { RequestParams, DefaultErrorInterface } from "../types";
import { REQUEST_TIMEOUT_DEFAULT, ErrorCode } from "../constants";

export default async ({
  method,
  url,
  queryParams,
  data,
  headers,
  isMultipart,
}: RequestParams): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    params: queryParams,
    data,
    baseURL: process.env.REACT_APP_ROOT_URL,
    timeout: REQUEST_TIMEOUT_DEFAULT,
    paramsSerializer: (params) =>
      QueryString.stringify(params, { arrayFormat: "brackets" }),
  };

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers,
    };
  }
  if (isMultipart) {
    config.headers = {
      ...config.headers,
      "content-type": "multipart/form-data",
    };
  }

  axios.interceptors.request.use(
    (requestConfig) => {
      return requestConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<DefaultErrorInterface>) => {
      const originalRequest = error.config;
      if (error.response?.data?.code === ErrorCode.INVALD_AUTH_TOKEN) {
        if (error.response?.data?.value?.["x-auth-token"]) {
          axios.defaults.headers.common["x-auth-token"] =
            error.response?.data?.value?.["x-auth-token"];
          return axios(originalRequest);
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return axios.request(config);
};

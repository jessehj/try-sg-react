import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import QueryString from "qs";
import { RequestParams } from "../types";
import { REQUEST_TIMEOUT_DEFAULT } from "../constants";

export const request = async <T>({
  method,
  url,
  queryParams,
  body,
  headers,
  isMultipart,
}: RequestParams): Promise<AxiosResponse<T>> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    params: queryParams,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    data: body,
    baseURL: process.env.REACT_APP_MOCK_URL,
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
    (error) => {
      return Promise.reject(error);
    }
  );

  return axios.request(config);
};

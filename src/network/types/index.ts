import { HttpMethod } from "../constants";

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  body?: FormData | unknown | string;
  headers?: object;
  isMultipart?: boolean;
}

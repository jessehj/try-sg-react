import { HttpMethod } from "../constants";

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  body?: FormData | unknown | string | any;
  headers?: object;
  isMultipart?: boolean;
}

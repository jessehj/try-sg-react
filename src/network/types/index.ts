import { HttpMethod } from "../constants";

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  data?: FormData | unknown | string;
  headers?: object;
  isMultipart?: boolean;
}
//  error
export interface DefaultErrorInterface {
  code?: string;
  msg?: string;
  value?: ErrorValueInterface;
}
interface ErrorValueInterface {
  "x-auth-token"?: string;
  authCode?: string;
  accountId?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

//  login

export interface LoginResponseRowInterface {
  id?: string;
  accountId?: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface LoginResponseInterface extends DefaultErrorInterface {
  row: LoginResponseRowInterface;
}

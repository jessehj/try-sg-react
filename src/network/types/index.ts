import { HttpMethod } from "../constants";

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  data?: FormData | unknown | string;
  headers?: object;
  isMultipart?: boolean;
}
export interface PostsRequestInterface {
  page: string;
  limit: string;
  keyword: string;
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
export interface LoginRequestInterface {
  accountId: string;
  password: string;
}
//  login
export interface PhoneRequestInterface {
  phone?: string;
}
export interface PostsRowsResponseInterface {
  row: PostsDetailInterface[];
}
export interface PostRowResponseInterface {
  row: PostsDetailInterface;
}
export interface PostsDetailInterface {
  id: string;
  title?: string;
  contents: string;
  author: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}
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
export interface PhoneTokenResponseInterface extends DefaultErrorInterface {
  row: PhoneTokenRowResponseInterface;
}
export interface SignUpRequestInterface extends DefaultErrorInterface {
  accountId: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  cert: string;
}
export interface PhoneTokenRowResponseInterface {
  cert: string;
  certExpired: string;
}

import { axiosInstance } from "./index";
import { LoginInfo, RegisterInfo } from "../../@types/logintype";

export const loginApi = (body: LoginInfo) =>
  axiosInstance.post("/account/sessions/me", body);

export const registerApi = (body: RegisterInfo) =>
  axiosInstance.post("/account/users", body);

export const logoutApi = () => axiosInstance.delete("/account/sessions/me");

import React, { FC } from "react";
import { LOGIN, SIGNUP, WELCOME } from "./url";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Welcome from "../pages/Welcome";

export type RouteInfo = {
  path: string;
  component: typeof React.Component | FC<any>;
};

export const ROUTES: Array<RouteInfo> = [
  {
    path: LOGIN,
    component: Login,
  },
  {
    path: SIGNUP,
    component: SignUp,
  },

  {
    path: WELCOME,
    component: Welcome,
  },
];

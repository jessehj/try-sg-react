import { NavigateFunction } from "react-router-dom";

export const LinkToLogin = (nav: NavigateFunction): void => {
  nav("/login");
};
export const LinkToSignup = (nav: NavigateFunction): void => {
  nav("/signup");
};
export const LingToWelcome = (nav: NavigateFunction): void => {
  nav("/");
};

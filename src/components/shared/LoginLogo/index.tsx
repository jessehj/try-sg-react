import React from "react";
import LoginLogoWrap from "./style";

const LoginLogo = ({ type }: { type: "signUp" | "login" | "welcome" }) => {
  return <LoginLogoWrap type={type} />;
};

export default LoginLogo;
